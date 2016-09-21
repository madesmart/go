/*
 * The Engine behind OneMade
 *
 * Copyright: Andres Buzzio https://andresbuzzio.github.io/portfolio
 *
 */


// Functions
// Draggable + Sortable + Resizable

$( function() {
    $( "#sortable" ).sortable();
    $( "#sortable" ).disableSelection();
  } );

//

// The Title

var myTitle = (
<h1>
Hello{2+2}
</h1>
);

ReactDOM.render(
  myTitle,
  document.getElementById('theTitle')
);

// The Blocks

/*
var myBlockOne = (
<ul id="sortable">
<li className="ui-state-default"></li>
</ul>
);

// Render Blocks
ReactDOM.render(
  myBlockOne,
  document.getElementById('container')
);
*/

var myBlockOne = (
<li className="ui-state-default"></li>
);

// Render Blocks
ReactDOM.render(
  myBlockOne,
  document.getElementById('blockOne')
);

var myBlockTwo = (
<li className="ui-state-default"></li>
);

// Render Blocks
ReactDOM.render(
  myBlockTwo,
  document.getElementById('blockTwo')
);

var myBlockThree = (
<li className="ui-state-default"></li>
);

// Render Blocks
ReactDOM.render(
  myBlockThree,
  document.getElementById('blockThree')
);

var myBlockFour = (
<li className="ui-state-default"></li>
);

// Render Blocks
ReactDOM.render(
  myBlockFour,
  document.getElementById('blockFour')
);
