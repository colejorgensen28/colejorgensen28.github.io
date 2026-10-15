'use client';

import type { ReactNode } from 'react';

type ProjectDisclosureProps = {
  id: string;
  number: string | number;
  category: string;
  title: string;
  description: string;
  cover: string;
  coverAlt: string;
  coverWidth?: number;
  coverHeight?: number;
  tags: string[];
  children: ReactNode;
};

export default function ProjectDisclosure({
  id,
  number,
  category,
  title,
  description,
  cover,
  coverAlt,
  coverWidth = 1280,
  coverHeight = 720,
  tags,
  children,
}: ProjectDisclosureProps) {
  return (
    <details
      className="project-disclosure"
      name="portfolio-project"
      id={id}
      onToggle={(event) => {
        const disclosure = event.currentTarget;
        if (!disclosure.open) return;
        requestAnimationFrame(() => {
          if (!disclosure.open) return;
          disclosure.querySelector('summary')?.scrollIntoView({ behavior: 'instant', block: 'start' });
        });
      }}
    >
      <summary className="project-summary" aria-labelledby={`${id}-title`}>
        <div className="project-cover">
          <img className="cover-image" src={cover} alt={coverAlt} width={coverWidth} height={coverHeight} loading="lazy" />
        </div>
        <div className="project-summary-copy">
          <p className="project-category"><span>{number}</span><span aria-hidden="true"> / </span>{category}</p>
          <h3 id={`${id}-title`}>{title}</h3>
          <p className="project-description">{description}</p>
          <div className="project-tags">
            {tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
          <span className="project-toggle-cue">
            <span className="project-cue-closed">Explore project</span>
            <span className="project-cue-open">Close project</span>
            <svg className="project-toggle-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 5v14M5 12l7 7 7-7" /></svg>
          </span>
        </div>
      </summary>
      <div className="project-body">{children}</div>
    </details>
  );
}
