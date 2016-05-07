# The SAM Pattern: a distributed system view of Front-End architectures

* Speaker: Jean-Jacques Dubray
* Available: June 19-21
* Length: 30 min

Abstract
----------
This talk introduces the SAM pattern, a new reactive, functional pattern that aims at replacing MVC. 
Its unidirectional data flow, single state tree and TLA+ lineage makes it easy to design and implement 
isomorphic component-based GUIs, while enforcing a strict decoupling between the View and the Back-End APIs. 

Description
-----------

Web Applications are rapidly becoming sophisticated distributed systems. When you look at a Facebook page or a Netflix catalog, 
the number of components interacting with each other requires complex synchronization and state management capabilities, reaching 
the limits of the MVC pattern. 

In the last couple of years, several reactive architectures have started to get some interest (React, Cycle.js, ELM) without 
generating significant traction (compared to established frameworks like Angular), while struggling to position effects in their 
programming model. A new reactive, functional pattern, the State-Action-Model pattern (SAM) was introduced in early 2016 on the 
foundation of TLA+ semantics.

The pattern, which is unapologetically driven by simplicity, promotes a clear delineation between the business logic and the view 
and challenges the complexity of frameworks like Google's Angular or Facebook's React/Redux. 

SAM's unidirectional flow is also challenging interactive patterns like BFF (Back-End for Front-End) or the Vertical Slice Pattern 
which suggest creating view-specific APIs, per platform, app, versions of an app...  

We'll start by reviewing some of the key challenges of modern UX and Front-End Architectures. We will then present the
key concepts of SAM and walk the audience through some node.js code samples (including server-side TimeTravel).

---------------


Speaker Bio
-----------
Jean-Jacques Dubray is the founder of [xgen.io](http://xgen.io) and [gliiph](http://www.gliiph.com). He has been building Service Oriented Architectures, 
and API platforms for the last 15 years. He is a former member of the research staff at HRL and earned his Ph.D. from 
the University of Provence (Luminy campus), home of the Prolog language. He is the inventor of the [BOLT methodology](http://www.xgenio.com/bolt-introduction.pdf) and the SAM pattern.

Links
-----
* [TLA+](https://en.wikipedia.org/wiki/TLA%2B)
* [Why I no longer use MVC frameworks?](http://www.infoq.com/articles/no-more-mvc-frameworks)
* [SAM Getting Started Guide](http://sam.js.org)
