declare function swal(params : {
	type?:'success'|'error'|'info'|'warning',
	title:string,
	text?:string,
	input?:'text'|'password'|'email'|'select',
	html?:string,
	showCancelButton?:boolean,
	confirmButtonText?:string,
	focusConfirm?:boolean,
	preConfirm?:Function
	onOpen?:Function,
	inputOptions?:Map<string,string>|any,
	reverseButtons?:boolean
}) : Promise<any>;

declare namespace swal{
	function showLoading() : void;
}
