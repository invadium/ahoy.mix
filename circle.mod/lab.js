function draw() {
    lineWidth(2)
    // use stroke to draw
    // set the color with normalized HSL values for convenience
    stroke(.46, .55, .68)

    // place the circle at 50% width and 50% height of the screen
    // set the radius to be 5% of the screen base (width or height which is smaller)
    circle( px(50), py(50), pb(5) )
}
