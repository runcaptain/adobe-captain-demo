import Header from "@/components/Header";
import MetricCard from "@/components/MetricCard";
import Section from "@/components/Section";
import CitationPanel, { type Citation } from "@/components/CitationPanel";

const citations: Citation[] = [
  {
    type: "Interview",
    source: "PM, Frame.io Enterprise",
    date: "Oct 12, 2025",
    excerpt:
      "Our creators love fast reviews but struggle to get non-users to open links. Sharing friction hurts adoption.",
  },
  {
    type: "Forum",
    source: "r/editors",
    date: "Oct 04, 2025",
    excerpt:
      "Upload reliability is critical when I’m on deadline. Even a single stalled asset breaks my flow.",
    link: "https://example.com/thread",
  },
  {
    type: "Support",
    source: "Zendesk #8421",
    date: "Sep 29, 2025",
    excerpt:
      "Audio auto-captions save us hours a week, but accuracy drops with multi-speaker timelines.",
  },
  {
    type: "Survey",
    source: "Quarterly PMF (n=134)",
    date: "Sep 15, 2025",
    excerpt:
      "I’d be very disappointed if I lost Frame.io — it’s where reviews happen.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto w-full max-w-6xl px-6 py-6">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 grid grid-cols-1 gap-6">
            <Section
              id="overview"
              title="Overview"
              description="Executive snapshot for Senior Manager, User Insights — Frame.io | Adobe"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                <MetricCard
                  title="Superhuman PMF"
                  value="41%"
                  caption="Very disappointed if they could no longer use Frame.io"
                  delta={{ value: "+3.2 pts WoW", tone: "up" }}
                  accent
                />
                <MetricCard
                  title="Net Promoter Score"
                  value="+36"
                  caption="Promoters – Detractors (last 30 days)"
                  delta={{ value: "-2 WoW", tone: "down" }}
                />
                <MetricCard
                  title="Activation Rate"
                  value="62%"
                  caption="New teams completing a first review project"
                  delta={{ value: "+1.1 pts WoW", tone: "up" }}
                />
                <MetricCard
                  title="Weekly Active Users"
                  value="148k"
                  caption="Up from 142k last week"
                  delta={{ value: "+4.2%", tone: "up" }}
                />
                <MetricCard
                  title="TTFV (p50)"
                  value="18m"
                  caption="Time to first successful review"
                  delta={{ value: "-2m WoW", tone: "up" }}
                />
                <MetricCard
                  title="Confidence Index"
                  value="A-"
                  caption="Data quality and coverage across sources"
                  delta={{ value: "stable", tone: "neutral" }}
                />
              </div>
            </Section>

            <Section
              id="signals"
              title="Signals"
              description="Top emerging themes and drivers from interviews, forums, support, and surveys."
            >
              <div className="panel p-4">
                <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                  <div className="border p-3">
                    <h3 className="text-sm">Sharing & External Reviewer Flow</h3>
                    <p className="mt-1 text-sm">
                      Friction when inviting non-users; desire for passwordless or one-tap access.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="token text-xs">+18 mentions</span>
                      <span className="token text-xs">Adoption driver</span>
                    </div>
                  </div>
                  <div className="border p-3">
                    <h3 className="text-sm">Upload Reliability under Load</h3>
                    <p className="mt-1 text-sm">
                      Edge-case failures during large project pushes; need resumable certainty.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="token text-xs">+11 mentions</span>
                      <span className="token text-xs">Critical throughput</span>
                    </div>
                  </div>
                  <div className="border p-3">
                    <h3 className="text-sm">AI Auto-Captions & Speaker Diarization</h3>
                    <p className="mt-1 text-sm">
                      Saves hours, but accuracy dips with multi-speaker timelines.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="token text-xs">+9 mentions</span>
                      <span className="token text-xs">Quality focus</span>
                    </div>
                  </div>
                  <div className="border p-3">
                    <h3 className="text-sm">Ecosystem Integrations</h3>
                    <p className="mt-1 text-sm">
                      Premiere Pro and Slack integration workflows drive stickiness.
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="token text-xs">+14 mentions</span>
                      <span className="token text-xs">Retention driver</span>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section
              title="Q&A — What does User Insights mean at Adobe?"
              description="Grounded answers with citations so decisions connect to evidence."
            >
              <div className="panel p-4">
                <div className="border p-3">
                  <h3 className="text-sm">Would they use RAG?</h3>
                  <p className="mt-1 text-sm">
                    For leadership, out-of-the-box RAG is too shallow. They need measured signals,
                    segments, and trend deltas tied to outcomes. Captain goes beyond retrieval to
                    produce structured metrics, not just paragraphs.
                  </p>
                </div>
                <div className="border p-3 mt-3">
                  <h3 className="text-sm">
                    What is the “superman metric” where it shows love for the product?
                  </h3>
                  <p className="mt-1 text-sm">
                    That’s the Superhuman PMF score: the percent who’d be “very disappointed” if
                    they could no longer use the product. It’s a leading indicator for product-market fit.
                  </p>
                </div>
                <div className="border p-3 mt-3">
                  <h3 className="text-sm">
                    Is deploying Captain on forum comments to generate a PMF score with citations a good demo?
                  </h3>
                  <p className="mt-1 text-sm">
                    Yes — especially if triangulated with interviews, support logs, and surveys. Captain can
                    weight sources, score confidence, and provide inline citations.
                  </p>
                </div>
                <div className="border p-3 mt-3">
                  <h3 className="text-sm">
                    So the demo is a dashboard with main metrics backed by citations?
                  </h3>
                  <p className="mt-1 text-sm">
                    Exactly. Show PMF, NPS, activation, adoption, and time-to-value with trends; back
                    every claim with traceable citations.
                  </p>
                </div>
              </div>
            </Section>
          </div>

          <div className="lg:col-span-1 grid grid-cols-1 gap-6">
            <CitationPanel citations={citations} />
            <div className="panel p-4">
              <h3 className="text-sm">RAG vs Captain</h3>
              <p className="mt-1 text-sm">
                RAG retrieves and summarizes. Captain measures and explains change: it normalizes
                sources, scores signal strength, and links evidence. Use color sparingly — red for
                attention, not decoration.
              </p>
              <ul className="mt-3 grid gap-2 text-sm list-disc pl-5">
                <li>Grounded metrics with confidence bands</li>
                <li>Source-weighted rollups with drill-down citations</li>
                <li>Segment-aware trends and deltas</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
