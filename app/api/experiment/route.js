import { NextResponse } from 'next/server';
const runExperimentsHandler = require('@/app/api/handler');

export async function POST(req) {
    try {
        const { iterations } = await req.json();

        if (iterations > 10) {
            return NextResponse.json({ error: 'Maximum number of iterations is 10' }, { status: 400 });
        }

        const results = await runExperimentsHandler(iterations);
        return NextResponse.json({ iterations: results }, { status: 200 });
    } catch (error) {
        console.error('Error handling request:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}