import Link from 'next/link';
import PawIcon from './PawIcon';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-sage/20 bg-cream">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-ink hover:text-sage-dark"
            >
              <span className="text-sage">
                <PawIcon className="h-6 w-6" />
              </span>
              <span className="font-heading text-lg font-bold">
                River Ridge Pet Retreat
              </span>
            </Link>
            <p className="mt-3 text-bark">
              A home away from home in the Sequatchie Valley
            </p>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-ink">Visit us</h3>
            <address className="mt-3 not-italic text-ink">
              River Ridge Pet Retreat
              <br />
              1315 River Ridge Rd
              <br />
              Dunlap, TN 37327
            </address>
          </div>

          <div>
            <h3 className="font-heading text-lg font-bold text-ink">Call us</h3>
            <p className="mt-3">
              <a
                href="tel:[PHONE NUMBER]"
                className="text-ink underline-offset-4 hover:text-sage-dark hover:underline"
              >
                [PHONE NUMBER]
              </a>
            </p>
          </div>
        </div>

        <div className="mt-10 border-t border-sage/20 pt-6 text-sm text-bark">
          © {year} River Ridge Pet Retreat
        </div>
      </div>
    </footer>
  );
}
