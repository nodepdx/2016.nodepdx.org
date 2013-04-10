ZenIRCBot and the Art of Pub/Sub
================================

* Speaker   : Wraithan (Chris McDonald)
* Available : Any
* Length    : 30-45 minutes

Description
-----------

[Pub/sub](http://en.wikipedia.org/wiki/Publish–subscribe_pattern) has been
growing in popularity for various pieces of infrastructure due to how much
bigger our networks are getting. The publisher being able to completely ignore
if there is anything listening or not and just fire off messages means that if
a part of your infrastructure goes down it doesn't bring down the other parts.


I'll be using my bot, [ZenIRCBot](http://docs.zenircbot.net/), as a case study
for pub/sub that is more approachable. ZenIRCBot connects to IRC then sends the
things it receives into a [redis](http://redis.io) pub/sub channel, it also
listens on a pub/sub channel for things to do such as sending messages to IRC
channels. On the other side of these channels are services that listen for
events, react, and send back things to do. Or maybe they just listen or just
send things to do, there is no reason why they have to both listen and send
commands, this is the beauty of this services based model.

This talk will be comprised of:

* A basic intro to Redis and what it is capable of.
* What pub/sub is and some basic examples.
* The case study: ZenIRCBot
* Problems and other various difficulties I've faced.
* Where is this project going?

---------------

Speaker Bio
-----------

[![Wraithan](https://secure.gravatar.com/avatar/2533918b9f770138fac5784801c397ec?s=180)](https://github.com/wraithan)

By day, I am a python developer for Mozilla's webdev department, working on
[Firefox Marketplace](http://marketplace.firefox.com).  By night, I am a
polyglot and love playing with new tools. node.js opened my eyes to the fact
that writing JS can be fun when the focus isn't presentation and the DOM.

Links
-----

* Company: http://mozilla.org/
* Github: http://github.com/wraithan
* Twitter: http://twitter.com/wraithan
