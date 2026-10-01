function draw() {
    // set vertical text positioning
    baseMiddle()
    // set horizontal text positioning
    alignCenter()
    // set size and typeface
    font('48px moon')
    // use fill with provided RGB values
    fill(96, 224, 255)

    // render text at the center
    // the anchor is defined by normalized x and y
    text( 'Ahoy, Collider.JAM!!!', rx(.5), ry(.5) )
}
