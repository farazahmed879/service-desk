"use client";
import ServiceForm from "@/components/services/ServiceForm";

export default function AddServicePage() {
  return (
    <div className="p-6">
      <ServiceForm
        onSave={(data) => {
          const stored = localStorage.getItem("services");
          const services = stored ? JSON.parse(stored) : [];

          const slug = data.name.toLowerCase().replace(/\s+/g, "-");

          const alreadyExists = services.some((s: any) => s.slug === slug);

          if (alreadyExists) {
            alert("Service already exists");
            return;
          }

          services.push({
            title: data.name,
            slug,
            image: "/images/services/passport/default.png",
          });

          localStorage.setItem("services", JSON.stringify(services));
        }}
      />
    </div>
  );
}
