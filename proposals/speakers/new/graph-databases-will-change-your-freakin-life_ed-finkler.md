Graph Databases Will Change Your Freakin Life
========================

* Speaker   : *Ed Finkler*
* Available : *June 19, 20, 21*
* Length    : *30 mins*

Description
-----------

Most of us have worked with relational DBs like MySQL or PostgreSQL, but for many use cases they aren't the best option. Graph databases have a simpler, more powerful model for handling complex related data. In this talk we'll work with Neo4j to explore the advantages of graph DBs using Node. Attendees will learn the graph model, how graph DBs let you do things that are practically impossible with SQL, and the best options for integrating one into your Node application -- new or existing.

#### WTF is a graph database
- Euler and Graph Theory
- Math -- it's hard, let's skip it
- The Graph DB model
- Nodes and Relationships
- Very simple compared to RDBMS, and much more flexible
    - Much closer to our whiteboard model

#### Which one? We'll use Neo4j
- Neo4j is good, popular.
    - the Cypher QL is pretty killer and makes more sense coming from SQL
- There are others. They are good, but often have steep learning curve
- So basically, Neo4j is a good first intro and we'll use it

#### When use it?
- For any related data
- As related-ness and amount of data increases, so does advantage of Graph DBs
- Show a couple use cases
    - Recommendation engines
    - Network topology map & track who affected by failures
    - Insurance company tracking number and type of claims, and acting on them
    - A blog/CMS! Frequently has a lot of related data, involving a lot of joins. 
        - A graph makes your "schema" much more flexible -- just add or remove relationships. Altering RDBMS schemas and queries much more common, harder.
        - Less code, easier to modify

#### Let's look at some examples
* Make a node
* Make another node
* Relate those nodes
* Now let's dump in an example data set
* Do a simple select
* Do a more complex select
* Do some crazy stuff that's basically impossible with RDBMSes

#### How do we use this from Node?
* Neo4j 2.x uses a RESTful API
    * All client libraries are wrappers for this
    * Show a couple code examples with popular wrappers

#### Resources
* My Graph-based blog
* Neo4j docs
* Neo4j slack
* Graph Story


---------------


Speaker Bio
-----------

Ed Finkler, also known as [Funkatron](https://twitter.com/funkatron), started making web sites before browsers had frames. He does front-end and server-side work in Python, PHP, and JavaScript. He is the Lead Developer and Head of Developer Culture at [Graph Story](http://graphstory.com).

He served as web lead and security researcher at [The Center for Education and Research in Information Assurance and Security (CERIAS) at Purdue University](http://www.cerias.purdue.edu) for 9 years. Along with Chris Hartjes, Ed is co-host of the [Development Hell podcast](http://devhell.info).

Ed's current passion is raising mental health awareness in the tech community with his [Open Sourcing Mental Illness](https://osmihelp.org) speaking campaign.

Ed writes at funkatron.com.


Links
-----

* Blog: https://funkatron.com
* Company: https://graphstory.com
* Github: http://github.com/funkatron
