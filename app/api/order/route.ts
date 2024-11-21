import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

interface Bid {
    _id: string;
    productName: string;
    clerkUserId: string;
    customerEmail: string;
    customerName: string;
    biddingAmount: number;
    imageUrl: string;
    timestamp: string;
}

const dataFilePath = path.join(process.cwd(), 'data.json');

export async function POST(req: NextRequest) {
    try {
        const { _id, productName, clerkUserId, customerEmail, customerName, biddingAmount, imageUrl } = await req.json();

        const newBid = {
            _id,
            productName,
            clerkUserId,
            customerEmail,
            customerName,
            biddingAmount,
            imageUrl,
            timestamp: new Date().toISOString()
        };

        let data = [];
        if (fs.existsSync(dataFilePath)) {
            const fileData = fs.readFileSync(dataFilePath, 'utf8');
            if (fileData) {
                data = JSON.parse(fileData);
            }
        }

        const isDuplicateAmount: boolean = data.some((bid: Bid) => bid.biddingAmount === biddingAmount);
        if (isDuplicateAmount) {
            return NextResponse.json({ error: 'Duplicate bidding amount' }, { status: 400 });
        }

        data.push(newBid);
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));

        return NextResponse.json({ message: 'Bid saved successfully' }, { status: 200 });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json({ error: 'Failed to save bid', errorMessage }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ username: "learnershakil", email: "learnershakil@gmail.com" });
}