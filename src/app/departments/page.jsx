"use client";

import PageHeader from "@/components/shared/PageHeader";
import DepartmentsGrid from "@/components/sections/DepartmentsGrid";

export default function DepartmentsPage() {
  return (
    <div>
      <PageHeader 
        title="Nos Filières"
        description="Découvrez tous les domaines d'études proposés par ESTM"
      />
      <DepartmentsGrid />
    </div>
  );
}
