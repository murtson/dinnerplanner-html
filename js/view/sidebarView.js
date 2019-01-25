/** ExampleView Object constructor
 * 
 * This object represents the code for one specific view (in this case the Example view). 
 * 
 * It is responsible for:
 * - constructing the view (e.g. if you need to create some HTML elements procedurally) 
 * - populating the view with the data
 * - updating the view when the data changes
 * 
 * You should create a view Object like this for every view in your UI.
 * 
 * @param {jQuery object} container - references the HTML parent element that contains the view.
 * @param {Object} model - the reference to the Dinner Model
 */ 
var SidebarView = function (container, model) {
	
	/**
	 * We use the @method find() on @var {jQuery object} container to look for various elements 
	 * inside the view in orther to use them later on. For instance:
	 * 
	 * @var {jQuery object} numberOfGuests is a reference to the <span> element that 
	 * represents the placeholder for where we want to show the number of guests. It's
	 * a reference to HTML element (wrapped in jQuery object for added benefit of jQuery methods)
	 * and we can use it to modify <span>, for example to populate it with dynamic data (for now 
	 * only 'Hello world', but you should change this by end of Lab 1).
	 * 
	 * We use variables when we want to make the reference private (only available within) the
	 * ExampleView.
	 * 
	 * IMPORTANT: Never use $('someSelector') directly in the views. Always use container.find
	 * or some other way of searching only among the containers child elements. In this way you
	 * make your view code modular and ensure it dosn't break if by mistake somebody else
	 * in some other view gives the same ID to another element.
	 * 
	 */
	var numberOfGuests = container.find("#numberOfGuests");
    var sideBar = container.find("#sideBar");
    var guests = model.getNumberOfGuests();
    
    var content = `<div class="row" id ="sbminirow1">
        <div class = "col-6">
            <h5 align="left">My Dinner</h5>
          </div>
        <div class ="col-6">
            <h5 data-toggle="collapse" data-target="#collapse" aria-expanded="false" controls="" class="float-right">Collapse</h5>
          </div>
        <div class ="col-12">
            <form action="" method="" class="form-inline">
                <label for="people">People: </label>
                <input type="number" class="form-control" id="people" style="margin:10px; width:50px;">  
            </form>
          </div>
        </div> 
    
    <div class ="row">
        <div class ="col-12 collapse dont-collapse-sm" id="collapse">  
            <div class ="row" id="sbminirow2">
                <div class = "col-6">
                    <h5 align="center">Dish Name</h5>
                </div>
                <div class ="col-6">
                    <h5 align="center">Cost</h5>
                </div>
            </div>
            <div class="row" id="sbminirow3">
                <div class = "col-12">
                    <h5 class="float-right" style="margin:10px;">SEK 0.00</h5>
                </div>
            </div>
            <div class="row" style="padding-bottom: 30vw;">
                <div class = "col-12" align="center">
                    <button type="button" class="btn btn-primary" style="margin:10px" id="confirm">Confirm Dinner</button>
                </div>
            </div>
        </div>
        
    </div>  <!-- end of Collaps -->
        `;
	/**
	 * When we want references to some view elements to be available from outside of view, we 
	 * define them as this.someName. We don't need this in Lab 1 yet, but in Lab 2 it 
	 * will be important for assigning listeners to these buttons, because the listeners
	 * should not be assigned in the view, but rather in controller.
	 * 
	 * We can then, in some other code, use exampleView.plusButton to reference the 
	 * this button and do something with it (see Lab 2).
	 * 
	 */
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	/**
	 * Here we use @var {jQuery object} numberOfGuests that is a reference to <span>
	 * in our view to dynamically set it's value to "Hello World".
	 */
	sideBar.html(content);
	
}
 
