import { type NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/db/db';
import { getServerSession } from 'next-auth';
import { NEXT_AUTH_CONFIG } from '@/lib/auth';

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {

    const session = await getServerSession(NEXT_AUTH_CONFIG)

    if (!session || !session.user) {
        return NextResponse.redirect(new URL('/invalidsession', req.url));
    }

    const handbook = await prisma.handbook.findUnique({ where: { id: params.id } });

    return NextResponse.json({
        handbook
    });
}
