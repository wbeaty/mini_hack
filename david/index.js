const TOTAL_SQUARES = 9;
const START_SPINS = 10;
var spins = 10;
var index = 0;
var stuffs;
var current_ctn;

window.onload = function() {
	setup();
}

function setup() {
	for ( var i = 0; i < TOTAL_SQUARES; ++i ) {
		addWheelPart( i, i );
	}
}

function createWheelPart( value ) {
	var div = document.createElement("div");
	div.className = "wheel-part";
	div.innerHTML = value;

	return div;
}

function addWheelPart( key, value ) {
	var wheel = document.getElementById( "wheel" );
	var square_value = Math.sqrt( TOTAL_SQUARES );

	if ( key % square_value == 0 ) {
		setNewCtn();
	}

	wheel.appendChild( createWheelPart( value ) );
}

function setNewCtn() {
	var wheel = document.getElementById( "wheel" );
	var new_line = document.createElement( "div" );
	new_line.className = "new-line";
	current_ctn = new_line;
	wheel.appendChild( new_line );
}

function spin() {
	stuffs = document.getElementsByClassName( "wheel-part" );
	index = 0;
	spinNext( stuffs[ 0 ] );
}

function spinNext ( child ) {
	if ( child == null ) {
		if ( spins == 0 ) {
			spins = START_SPINS;
			return;
		}
		--spins;
		spin();
		return;
	}
	setTimeout( function() {
		restore();
		child.className = "wheel-part-highlight";
		index++;
		if ( index > TOTAL_SQUARES - 1)
			index = 0;
		spinNext ( stuffs[ index ] );
	}, 100);
}

function restore() {
	var children = document.getElementsByClassName( "wheel-part" );
	Array.from(children).forEach( function( part ) {
		part.className = "wheel-part";
	} );
}