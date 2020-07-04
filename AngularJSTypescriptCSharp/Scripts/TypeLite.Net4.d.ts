
 
 

 

/// <reference path="Enums.ts" />

declare namespace AngularJSTypescriptCSharp.Models {
	interface ProductModel {
		Description: string;
		Id: System.Guid;
		Price: number;
		ProductName: string;
	}
	interface ShopingCartModel {
		Price: number;
		ProductId: System.Guid;
		Quantity: number;
	}
	interface TestModel {
		Age: number;
		Id: System.Guid;
		Name: string;
	}
}
declare namespace System {
	interface Guid {
	}
}


