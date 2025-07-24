import { Client } from "@notionhq/client";
import { NextResponse } from "next/server";

export async function GET() {
    const notion = new Client({
        auth: process.env.NOTION_TOKEN,
    });

    const info = await notion.databases.query({ 
        database_id: process.env.NOTION_PAGE_ID,
        filter: {
            or: [
                {
                    property: "Category",
                    select: {
                        equals: "Goal",
                    },
                },
                {
                    property: "Category",
                    select: {
                        equals: "Motivation",
                    }
                }
            ],
        }
    });

    return NextResponse.json({ data: info })
}