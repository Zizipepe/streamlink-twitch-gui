import {
	attr,
	belongsTo,
	Model
} from "ember-data";


export default Model.extend({
	image: attr( "string" ),
	priority: attr( "number" ),
	scheduled: attr( "boolean" ),
	sponsored: attr( "boolean" ),
	stream: belongsTo( "twitchStream", { async: false } ),
	text: attr( "string" ),
	title: attr( "string" )

}).reopenClass({
	toString() { return "kraken/streams/featured"; }
});
