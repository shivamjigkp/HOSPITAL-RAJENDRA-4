import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const appointmentSchema = z.object({
  patientName:   z.string().min(2, "Name must be at least 2 characters").max(100),
  patientPhone:  z.string().min(7, "Please enter a valid phone number").max(20),
  patientEmail:  z.string().email("Please enter a valid email").optional().or(z.literal("")),
  departmentId:  z.string().optional(),
  doctorId:      z.string().optional(),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  message:       z.string().max(1000).optional(),
  consentGiven:  z.boolean().refine((v) => v === true, {
    message: "Consent is required to submit an appointment request.",
  }),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = appointmentSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: parsed.error.errors[0]?.message ?? "Validation failed." },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // TODO (Phase 4): Save to database using Prisma
    // const appointment = await prisma.appointment.create({
    //   data: {
    //     patientName:    data.patientName,
    //     patientPhone:   data.patientPhone,
    //     patientEmail:   data.patientEmail || null,
    //     departmentId:   data.departmentId || null,
    //     doctorId:       data.doctorId || null,
    //     preferredDate:  data.preferredDate ? new Date(data.preferredDate) : null,
    //     preferredTime:  data.preferredTime || null,
    //     message:        data.message || null,
    //     consentGiven:   data.consentGiven,
    //     status:         "PENDING",  // Always PENDING — never auto-confirm
    //   },
    // });
    //
    // TODO (Phase 5): Send notification email to hospital staff
    // TODO (Phase 5): Send confirmation SMS/WhatsApp to patient

    // Temporary: log to server console until DB is connected
    console.log("[Appointment Request]", {
      name: data.patientName,
      phone: data.patientPhone,
      department: data.departmentId,
      date: data.preferredDate,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Your appointment request has been received. Our team will contact you shortly to confirm.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[API /appointments] Error:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
