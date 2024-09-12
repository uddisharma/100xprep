import { type NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/db';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_CONFIG } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

    try {
        const session = await getServerSession(NEXT_AUTH_CONFIG)

        if (!session || !session.user) {
            return NextResponse.redirect(new URL('/invalidsession', req.url));
        }

        await prisma.handbook.delete({ where: { id: params.id } })
        revalidatePath('/admin/handbooks')
        return NextResponse.json({
            message: "Handbook deleted successfully"
        });

    } catch (error) {

        return NextResponse.json({
            message: "An error occurred while deleting the handbook"
        }, {
            status: 500
        })
    }

}
