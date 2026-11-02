# Developer companion editorial review

This document exists to help developers implement any landing-page story without reopening shared architecture decisions.

Structure model: explanation/reference hybrid. Total: 1,053 words before accepted edits.

| Pass | Original Text | Revised Text | Changes |
| --- | --- | --- | --- |
| structure | Components and Design system styling ownership | PRESERVE global token overview; clarify that section rules are colocated CSS Modules | Removes a cross-section ownership ambiguity without expanding the document materially |
| structure | Build, run, and test — browser checks | PRESERVE; add the production-export server owner | Closes a missing prerequisite in an otherwise logical reference sequence |
| prose | “primary content visible in first viewport” | “headline, pitch, and CTA visible in the first viewport” | Replaces an ambiguous reference with the acceptance language |
| prose | “mobile performance budget must support the PRD's sub-two-second goal” | State score and LCP thresholds explicitly | Makes the quality gate enforceable |

Summary: four recommendations, all accepted; negligible net word-count growth; no comprehension trade-off. The document remains compact enough for random-access developer use.
