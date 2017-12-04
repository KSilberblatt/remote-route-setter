# Remote-Route-Setter

## Background and Overview

Remote Route Setter (RRS) is a web app that allows setters to quickly sketch out routes before bolting them to a wall. The RRS will have a set standard holds the user can choose from and put on a grid based wall (simulating a real gym wall). The holds, wall, and bolt points will all have the same proportions as the physical objects they represent. 

This tool gives routesetters a visualization of their routes before setting so that the downtime of a wall can be minimized. Additionally, a counter of holds will be kept in a list so that setters can easily keep track of the gear they need to set the route they want. Finally, a link to buy the holds in your list will be provided for marketability.

## MVP List

RRS features:

* Canvas
  - Grid based canvas
  - Easy navigation (zoom-in/zoom-out and pan)
  - Asthetically pleasing and intuitive size scaling

* Holds 
  - A variety of hand and footholds for the user to place
  - Asethetically pleasing against the grid and easy to place/rotate
  - real world proportions (fixed sizes) 

* List
  - Keeps track of the holds in an asethetically pleasing list
  - Links to sites where you can buy the holds needed for the route

* Filter/search
  - Filter/search the holds for exactly what you want
  - Highlight certain holds on the wall (footholds, handholds, jugs, crimps, etc.)

* Solution
  - tag the holds for an intended solution
  - figure out a way to display the solution nicely



## Wireframes

## Architecture and Technologies

This project utilizes these technologies:

- Vanilla JavaScript for "drawing"
- HTML5 Canvas for DOM access, manipulation and rendering.
- Webpack to bundle and serve the various scripts.

## Implementation Timeline

Over the weekend:

 Refamiliarize myself with JS and HTML5 Canvas

Day 1: Webpack setup, and grid set up, and add holds

- [ ] Node and Webpack setup

- [ ] Grid set up

- [ ] Zoom and pan

- [ ] Add a few holds to grid points


Day 2: Finish holds 

- [ ] Holds are draggable and can be rotated 

- [ ] Populate web app with a selection of holds

- [ ] Start List styling

Day 3: Finish list styling, Filter/Search

- [ ] Finish the list styling

- [ ] Add filter bar for currently used holds

- [ ] Add search for hold to use on sidebar

 Increase difficulty functionality

 Pause, new game, and About modal

Day 4: Solution
- [ ] Add tag feature for holds to show inteded solution 
  - Example: Starthold - Mantle

- [ ] Toggle lines for solution (WIP)


Bonus Features:

- Sockets so that multiple people can edit a route at the same time
- More holds
- Toggle human rigid body with height slider to help visualize distances based on a human rigid body
- Export to pdf with the route, statistics and potentially notes
