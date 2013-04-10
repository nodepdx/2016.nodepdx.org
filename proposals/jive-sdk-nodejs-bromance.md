# Jive Purposeful Places SDK - A NodeJS Bromance

- Speaker: Aron Racho
- Available: May: 16-17
- Length: 45 mins

## Description

Jive Software's latest cloud release enables 3rd party developers to easily push data marshalled from external systems of record such as Salesforce into Jive. Our aim is to publish a developer framework and API which makes it drop-dead simple -- and fun -- to get up-and-going from scratch, or easily integrate into an existing framework. We chose NodeJS precisely for those reasons:

- High developer adoption
- High velocity development -- javascript! no compilation required 
- Best-in-class IDE support (IntelliJ for example)
- Native support for REST and HTTP
- Excellent package management system (NPM == maven the Good Parts)
- Tons of great libraries
- Amazing documentation, well organized, very easy to get started instantly

Our framework is built on Express, and is designed to be programmed by "convention: fill in the blanks with logic specific to your application, and as long as you've satisfied the contract, the framework automatically:

- Wires up routes required for configuring your integration
- Notifies your listeners for integration life cycle events (integration created; destroyed; updated, etc.)
- Executes recurrent tasks you've scheduled
- Handles persistence of required objects. We have support for 3 types of persistence out of the box -- in-memory, file, and MondoDB.

The framework is designed for developers who want to as quickly as possible start integrating a 3rd party service with Jive, with minimum setup.

For those interested in integrating Jive into an existing NodeJS Express app, we are going to make the underlying API available to developers, allowing them finer grained control over the setup of their integration. This API will be the same one underlying the mechanics of the aforementioned framework. 

For my presentation, I will be describe how we used NodeJS as the basis for this framework and API. Please note at the time of this proposal, we've created the framework, and are now in the process of refining the API so that it can be used independently of the framework.

## Speaker Bio
Aron Racho is a Senior Software Developer at Jive Software. Aron's background has primarily been in Java, about 10 years in. He is a relatively recent convert to Javascript, and server-side Javascript in particular. Though relatively new to NodeJS, he has been smitten by its fluency, flexibility, and superb design. One might even say a Bromance has been started.


## Contact Info
Contact Aron Racho via email at aron.racho@jivesoftware.com.

## Links
The project is available on NPM and github. It is currently under heavy development.

- https://github.com/jivesoftware/jive-sdk
- https://github.com/jivesoftware/jive-sdk-examples
- https://npmjs.org/package/jive-sdk
