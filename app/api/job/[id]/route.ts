import { type NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/db';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_CONFIG } from '@/lib/auth';

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

    try {
        const session = await getServerSession(NEXT_AUTH_CONFIG)

        if (!session || !session.user) {
            return NextResponse.redirect(new URL('/invalidsession', req.url));
        }

        await prisma.job.delete({ where: { id: params.id } })

        return NextResponse.json({
            message: "Job deleted successfully"
        });

    } catch (error) {

        return NextResponse.json({
            message: "An error occurred while deleting the job"
        }, {
            status: 500
        })
    }

}
