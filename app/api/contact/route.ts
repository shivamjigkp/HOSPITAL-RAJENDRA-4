import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters").max(100),
  phone:   z.string().max(20).optional().or(z.literal("")),
  email:   z.string().email("Please enter a valid email").optional().or(z.literal("")),
  subject: z.string().max(200).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message ?? "Validation failed." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // TODO (Phase 4): Save to database using Prisma
    // await prisma.contactInquiry.create({
    //   data: {
    //     name:    data.name,
    //     phone:   data.phone || null,
    //     email:   data.email || null,
    //     subject: data.subject || null,
    //     message: data.message,
    //     status:  "NEW",
    //   },
    // });

    // TODO (Phase 5): Send notification email to hospital staff

    console.log("[Contact Inquiry]", { name: data.name, subject: data.subject });

    return NextResponse.json(
      { success: true, message: "Your message has been received. We will get back to you soon." },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /contact] Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
