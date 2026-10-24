import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

const learn = [
  {to: '/docs/tips', icon: '💡', title: 'Tip of the Day', text: 'Shortcuts, CLI runs, lightweight listeners and other habits that save hours.'},
  {to: '/docs/performance-testing-types', icon: '🧭', title: 'Testing Types', text: 'Load, stress, spike, soak and the rest: what each answers and when to run it.'},
  {to: '/docs/glossary', icon: '📖', title: 'Glossary', text: 'An A to Z of performance terms, mapped to what they mean in JMeter.'},
  {to: '/docs/cheat-sheet', icon: '📋', title: 'Cheat Sheet', text: 'CLI options, keyboard shortcuts and the properties you change most.'},
  {to: '/docs/resources', icon: '🔗', title: 'Resources', text: 'Plugins, training videos, cloud runners, practice sites and community help.'},
];

const reference = [
  {to: '/docs/reference/components', icon: '🧩', title: 'Components', text: 'Every sampler, controller, listener, config element, assertion, timer and processor.'},
  {to: '/docs/reference/functions', icon: '🧮', title: 'Functions', text: '${__Random()}, ${__time()}, ${__P()} and every other built-in function.'},
  {to: '/docs/reference/properties', icon: '🔧', title: 'Properties', text: 'Every property you can set in user.properties or with -J.'},
];

function Cards({items}) {
  return (
    <div className="jm-cards">
      {items.map((c) => (
        <Link key={c.to} to={c.to} className="jm-card">
          <h3>
            {c.icon} {c.title}
          </h3>
          <p>{c.text}</p>
        </Link>
      ))}
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title="Learn JMeter and performance testing" description={siteConfig.tagline}>
      <header className="jm-hero">
        <div className="container">
          <h1>
            Learn <span>JMeter</span>.<br />
            Test performance with confidence.
          </h1>
          <p>{siteConfig.tagline}. Tips, concepts and a fully searchable JMeter 5.6.3 reference in one place.</p>
          <Link className="button button--primary button--lg" to="/docs">
            Get started
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/reference">
            Browse the reference
          </Link>
        </div>
      </header>
      <main className="container">
        <h2 className="jm-section-title">Learn</h2>
        <Cards items={learn} />
        <h2 className="jm-section-title">Reference</h2>
        <Cards items={reference} />
      </main>
    </Layout>
  );
}
