import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "IT Workforce & AMC Services for PSUs and Enterprises",
  description:
    "Global Computers & IT Solutions provides skilled IT manpower deployment, GeM buyer assistance, and annual maintenance contract (AMC) services for PSUs and enterprises with SLA-based support, preventive maintenance, reporting, and audit-ready documentation.",
};

const projectsHref = "/projects";
const GEM_ID = "GLOBAL@2024";

export default function ITWorkforceAMCPage() {
  return (
    <main className="bg-white text-slate-900">
      <section className="border-b bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 border border-blue-100 px-4 py-2 rounded-full text-sm font-semibold">
                <span>✔</span>
                <span>PSU-Ready Deployment • SLA-Based AMC • Multi-Location Support</span>
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-black tracking-tight leading-[1.05]">
                IT Workforce & <span className="text-blue-600">AMC Services</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                Global Computers & IT Solutions provides{" "}
                <strong>skilled IT manpower</strong>,{" "}
                <strong>GeM buyer support</strong>, and{" "}
                <strong>Annual Maintenance Contracts (AMC)</strong> to ensure uninterrupted
                operations for <strong>PSUs, government organizations, and enterprises</strong>.
                We deliver structured deployments with documentation, reporting, and SLA-driven support.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/contact-us"
                  className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold shadow hover:bg-blue-500 transition"
                >
                  Request Proposal
                </Link>
                <Link
                  href="/contact-us"
                  className="px-7 py-3 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-blue-400 transition"
                >
                  Discuss SLA / Scope
                </Link>
                <Link
                  href={projectsHref}
                  className="px-7 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
                >
                  View Projects
                </Link>
              </div>

              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <InfoPill title="SLA Commitments" desc="Response / resolution timelines & escalation" />
                <InfoPill title="Preventive Maintenance" desc="Health checks, updates & planned activities" />
                <InfoPill title="Audit-Ready Reporting" desc="Registers, logs, checklists & monthly MIS" />
                <InfoPill title="Replacement Support" desc="Backup resources & continuity planning" />
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-xl p-8">
              <h3 className="text-xl font-black">What we manage</h3>
              <ul className="mt-5 space-y-3 text-slate-700">
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>End-user IT support</strong> (desktop, OS, apps, printers)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>Network & infrastructure</strong> (LAN, switches, Wi-Fi, server room basics)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>Helpdesk operations</strong> (ticketing, escalation, resolution tracking)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>AMC execution</strong> (preventive + corrective maintenance)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span>✅</span>
                  <span>
                    <strong>OEM coordination</strong> (warranty calls, spares, vendor follow-up)
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="w-full inline-flex justify-center py-3 rounded-xl bg-blue-600 text-white font-black hover:bg-blue-500 transition"
                >
                  Get Workforce / AMC Quote
                </Link>
                <p className="mt-3 text-xs text-slate-500">
                  Scope varies by site size, locations, hardware count and SLA requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="rounded-[2rem] border border-blue-100 bg-blue-50 p-8 md:p-10">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-black">
                  GeM Buyer Assistance & Service Execution
                </h2>
                <p className="mt-3 text-slate-700 max-w-4xl leading-relaxed">
                  We support organizations not only in service delivery, but also in the
                  practical process around <strong>GeM procurement, buyer coordination, scope understanding,
                  execution planning, and post-award support</strong>.
                </p>
              </div>

              <div className="rounded-2xl border border-blue-200 bg-white px-5 py-4">
                <div className="text-xs uppercase tracking-widest font-black text-slate-500">
                  GeM Registered ID
                </div>
                <div className="mt-1 text-xl font-black text-blue-700">{GEM_ID}</div>
              </div>
            </div>

            <div className="mt-8 grid lg:grid-cols-3 gap-6">
              <FeatureCard
                title="Support for Buyers"
                desc="We help buyers understand scope, manpower structure, AMC model, service coverage, and documentation expectations."
                points={[
                  "Clarification on service scope and deliverables",
                  "Support in understanding AMC / workforce models",
                  "Discussion on site count, hardware count, shift model",
                  "Alignment of service expectations before execution",
                ]}
              />
              <FeatureCard
                title="GeM & Contract Support"
                desc="We help coordinate requirements around GeM process, documentation, deployment planning, and contract-aligned service delivery."
                points={[
                  "GeM-ready communication and support",
                  "Work scope understanding for buyers and departments",
                  "Deployment planning after order / award",
                  "Reporting structure aligned with contract requirements",
                ]}
              />
              <FeatureCard
                title="End-to-End Service Continuity"
                desc="From buyer-side requirement discussion to workforce deployment and AMC support, we stay involved throughout the lifecycle."
                points={[
                  "Requirement discussion to execution planning",
                  "Onboarding, registers, checklists, MIS",
                  "Preventive and corrective support cycle",
                  "Long-term AMC / support continuity",
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="IT Workforce Services"
            subtitle="Skilled resources for day-to-day IT operations, project execution, system administration, and support functions."
          />

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <FeatureCard
              title="On-Site Support Engineers"
              desc="End-user support, device health checks, issue resolution, and coordination with departments."
              points={[
                "Desktop/laptop OS & software support",
                "Printer & peripheral support",
                "Basic network troubleshooting",
                "User coordination & documentation",
              ]}
            />
            <FeatureCard
              title="Helpdesk & Operations"
              desc="Structured ticketing, tracking, escalation, and closure with reporting."
              points={[
                "Incident logging & tracking",
                "SLA-based response & escalation",
                "Daily/weekly status reports",
                "Root cause tagging (where applicable)",
              ]}
            />
            <FeatureCard
              title="Network / Infrastructure Support"
              desc="LAN/Wi-Fi support, switch configurations support (as per access), monitoring and coordination."
              points={[
                "LAN & Wi-Fi issue handling",
                "Basic server-room coordination",
                "Structured cabling supervision",
                "Vendor/OEM coordination support",
              ]}
            />
          </div>

          <div className="mt-10 bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <h3 className="text-2xl font-black">Typical Roles We Deploy</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-slate-700">
              <li className="list-none">• System Administrators / Support Engineers</li>
              <li className="list-none">• Network / Infrastructure Support Personnel</li>
              <li className="list-none">• Helpdesk Executives (L1 / L2)</li>
              <li className="list-none">• Application Support Resources</li>
              <li className="list-none">• Project-based Deployment Teams</li>
              <li className="list-none">• Multi-location Support Coordination</li>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
              >
                Share Requirement
              </Link>
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
              >
                Request Manpower Profile
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Deployment & Engagement Model"
            subtitle="Flexible models aligned with PSU processes, approvals, reporting structure, and service expectations."
          />

          <div className="mt-10 grid lg:grid-cols-4 gap-4">
            <Step title="Site-Based Deployment" desc="Dedicated on-site engineers as per shifts and site count." />
            <Step title="Centralized Support" desc="Central helpdesk with escalation to field engineers." />
            <Step title="Project-Specific Team" desc="Defined scope team for upgrades, rollout, migrations or audits." />
            <Step title="Hybrid Model" desc="On-site + remote + periodic visits with SLA and reporting." />
          </div>

          <div className="mt-10 bg-white border border-slate-200 rounded-3xl p-8">
            <h3 className="text-2xl font-black">Onboarding & Control</h3>
            <p className="mt-4 text-slate-600 max-w-5xl">
              Deployment is executed through structured onboarding: scope confirmation, site survey (if required),
              asset baseline, reporting lines, escalation matrix, and documentation formats.
            </p>

            <div className="mt-6 grid md:grid-cols-2 gap-4 text-slate-700">
              <li className="list-none">• Scope & SLA sign-off (response / resolution)</li>
              <li className="list-none">• Asset baseline & register creation</li>
              <li className="list-none">• Ticketing / reporting format finalization</li>
              <li className="list-none">• Escalation matrix & SPOC identification</li>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="Annual Maintenance Contract (AMC) Services"
            subtitle="Preventive + corrective maintenance for IT hardware, software systems, and integrated infrastructure to ensure uptime and predictable operational costs."
          />

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Preventive Maintenance"
              desc="Planned visits and checklists to reduce downtime and catch issues early."
              points={[
                "Health checks & cleaning",
                "Patch/update planning (as per policy)",
                "UPS / power checks",
                "Preventive checklists & sign-off",
              ]}
            />
            <FeatureCard
              title="Corrective Maintenance"
              desc="Incident handling, troubleshooting, coordination and repair planning."
              points={[
                "Issue diagnosis & resolution",
                "Replacement coordination (if required)",
                "OEM warranty call coordination",
                "Closure notes & documentation",
              ]}
            />
            <FeatureCard
              title="Reporting & MIS"
              desc="Transparent reporting aligned with PSU requirements."
              points={[
                "Monthly service report & summary",
                "Incident register & resolution time",
                "Preventive visit logs",
                "Recommendations & improvement plan",
              ]}
            />
          </div>

          <div className="mt-10 bg-slate-50 border border-slate-200 rounded-3xl p-8">
            <h3 className="text-2xl font-black">Typical AMC Scope Includes</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-4 text-slate-700">
              <li className="list-none">• Preventive & corrective maintenance</li>
              <li className="list-none">• Incident management and issue resolution</li>
              <li className="list-none">• Software updates & minor enhancements (as agreed)</li>
              <li className="list-none">• Hardware coordination and OEM support</li>
              <li className="list-none">• Performance monitoring and reporting</li>
              <li className="list-none">• Asset lifecycle guidance & replacement planning</li>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
              >
                Request AMC Quote
              </Link>
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-white text-slate-900 font-bold border border-slate-200 hover:border-blue-400 transition"
              >
                Share Hardware Count
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="PSU & Contract Readiness"
            subtitle="Structured service delivery aligned with PSU documentation, audit practices, and contract compliance."
          />

          <div className="mt-10 grid lg:grid-cols-3 gap-6">
            <FeatureCard
              title="Documentation & Registers"
              desc="All service activities supported by documentation and logs."
              points={[
                "Ticket registers & closure notes",
                "Preventive checklists",
                "Asset registers & mapping",
                "Replacement/repair records",
              ]}
            />
            <FeatureCard
              title="SLA & Escalation"
              desc="Clearly defined SLA with escalation matrix and reporting."
              points={[
                "Response & resolution targets",
                "Escalation points & SPOC",
                "Weekly/monthly review",
                "Corrective action reporting",
              ]}
            />
            <FeatureCard
              title="Multi-Location Scalability"
              desc="Support model for multiple offices or sites."
              points={[
                "Central coordination",
                "Site-wise reporting",
                "Periodic site visits",
                "Uniform documentation formats",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <SectionTitle
            title="From Buyer Side to Final Service Delivery"
            subtitle="We support the full journey — requirement discussion, scope understanding, execution planning, deployment, reporting, and long-term support."
          />

          <div className="mt-10 grid lg:grid-cols-4 gap-4">
            <Step title="1. Buyer Discussion" desc="Understand service need, site size, hardware count, SLA and manpower expectation." />
            <Step title="2. Scope Alignment" desc="Clarify deployment model, reporting format, support boundaries and documentation." />
            <Step title="3. Service Execution" desc="Deploy workforce, start AMC activities, begin registers, logs and ticket handling." />
            <Step title="4. Ongoing Support" desc="MIS reporting, preventive maintenance, escalations, review meetings and continuity support." />
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50 p-8">
            <h3 className="text-2xl font-black">Why this helps buyers</h3>
            <p className="mt-4 text-slate-700 max-w-5xl">
              Buyers often need a partner who not only provides manpower or AMC service, but also
              understands documentation, reporting, coordination, and execution discipline.
              We support this complete cycle in a structured and professional manner.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-slate-900 text-white font-bold hover:bg-slate-800 transition"
              >
                Discuss Buyer Requirement
              </Link>
              <Link
                href="/contact-us"
                className="px-7 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-500 transition"
              >
                Request GeM / Service Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center bg-blue-600 text-white p-12 md:p-16 rounded-[3rem]">
            <h2 className="text-3xl md:text-5xl font-black mb-4">
              Need Reliable IT Support for Your Organization?
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto">
              Share your locations, hardware count, SLA requirements, and scope — we will propose the best
              workforce + AMC model with audit-ready reporting, GeM support, and structured execution.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-us"
                className="bg-white text-blue-600 px-10 py-4 rounded-full font-black shadow-lg hover:bg-blue-50 transition"
              >
                Get Proposal
              </Link>
              <Link
                href="/contact-us"
                className="bg-blue-800 text-white px-10 py-4 rounded-full font-black border border-blue-400 hover:bg-blue-700 transition"
              >
                Request Site Survey
              </Link>
            </div>

            <p className="mt-7 text-sm text-blue-100">
              GeM ID: <strong>{GEM_ID}</strong>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-black">{title}</h2>
      <p className="mt-3 text-slate-600 text-lg max-w-4xl">{subtitle}</p>
    </div>
  );
}

function InfoPill({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-4 rounded-2xl border border-slate-200 bg-white">
      <div className="font-black">{title}</div>
      <div className="text-sm text-slate-600 mt-1">{desc}</div>
    </div>
  );
}

function FeatureCard({
  title,
  desc,
  points,
}: {
  title: string;
  desc: string;
  points: string[];
}) {
  return (
    <div className="p-7 rounded-3xl border border-slate-200 bg-white shadow-sm hover:border-blue-300 transition">
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 text-slate-600">{desc}</p>
      <ul className="mt-5 space-y-2 text-slate-700 text-sm">
        {points.map((p) => (
          <li key={p} className="flex gap-2">
            <span className="text-blue-600">•</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Step({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="p-5 rounded-2xl border border-slate-200 bg-white">
      <div className="font-black">{title}</div>
      <div className="mt-2 text-sm text-slate-600">{desc}</div>
    </div>
  );
}