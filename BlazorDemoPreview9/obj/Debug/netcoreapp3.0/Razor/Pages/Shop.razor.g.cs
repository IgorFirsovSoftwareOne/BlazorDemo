#pragma checksum "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "212e3cf4cf7ca139ad133720c4e24530324b3ebd"
// <auto-generated/>
#pragma warning disable 1591
namespace BlazorDemoPreview9.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Components;
#nullable restore
#line 1 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using System.Net.Http;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using Microsoft.AspNetCore.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using Microsoft.AspNetCore.Components.Authorization;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using Microsoft.AspNetCore.Components.Forms;

#line default
#line hidden
#nullable disable
#nullable restore
#line 5 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using Microsoft.AspNetCore.Components.Routing;

#line default
#line hidden
#nullable disable
#nullable restore
#line 6 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using Microsoft.AspNetCore.Components.Web;

#line default
#line hidden
#nullable disable
#nullable restore
#line 7 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using Microsoft.JSInterop;

#line default
#line hidden
#nullable disable
#nullable restore
#line 8 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using BlazorDemoPreview9;

#line default
#line hidden
#nullable disable
#nullable restore
#line 9 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using BlazorDemoPreview9.Shared;

#line default
#line hidden
#nullable disable
#nullable restore
#line 10 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\_Imports.razor"
using DevExpress.Blazor;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
using BlazorDemoPreview9.Data;

#line default
#line hidden
#nullable disable
#nullable restore
#line 3 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
using System.Data;

#line default
#line hidden
#nullable disable
#nullable restore
#line 4 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
using BlazorDemoPreview9.Model;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/shop")]
    public class Shop : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.AddMarkupContent(0, "<h1>Shop</h1>\r\n\r\n");
#nullable restore
#line 12 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
 if (products == null)
{

#line default
#line hidden
#nullable disable
            __builder.AddContent(1, "    ");
            __builder.AddMarkupContent(2, "<p>\r\n        <em>Loading...</em>\r\n    </p>\r\n");
#nullable restore
#line 17 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
}
else
{

#line default
#line hidden
#nullable disable
            __builder.AddContent(3, "    ");
            __builder.OpenComponent<Microsoft.AspNetCore.Components.Forms.EditForm>(4);
            __builder.AddAttribute(5, "Model", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Object>(
#nullable restore
#line 20 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                      typeof(SearchModel)

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(6, "OnValidSubmit", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Microsoft.AspNetCore.Components.EventCallback<Microsoft.AspNetCore.Components.Forms.EditContext>>(Microsoft.AspNetCore.Components.EventCallback.Factory.Create<Microsoft.AspNetCore.Components.Forms.EditContext>(this, 
#nullable restore
#line 20 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                                                           StartSearch

#line default
#line hidden
#nullable disable
            )));
            __builder.AddAttribute(7, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment<Microsoft.AspNetCore.Components.Forms.EditContext>)((context) => (__builder2) => {
                __builder2.AddMarkupContent(8, "\r\n        ");
                __builder2.OpenComponent<Microsoft.AspNetCore.Components.Forms.DataAnnotationsValidator>(9);
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(10, "\r\n        ");
                __builder2.OpenComponent<Microsoft.AspNetCore.Components.Forms.ValidationSummary>(11);
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(12, "\r\n\r\n        ");
                __builder2.OpenComponent<Microsoft.AspNetCore.Components.Forms.InputText>(13);
                __builder2.AddAttribute(14, "class", "searchBox");
                __builder2.AddAttribute(15, "placeholder", "Search..");
                __builder2.AddAttribute(16, "Value", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.String>(
#nullable restore
#line 24 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                                                                          searchModel.SearchString

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(17, "ValueChanged", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<Microsoft.AspNetCore.Components.EventCallback<System.String>>(Microsoft.AspNetCore.Components.EventCallback.Factory.Create<System.String>(this, Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.CreateInferredEventCallback(this, __value => searchModel.SearchString = __value, searchModel.SearchString))));
                __builder2.AddAttribute(18, "ValueExpression", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Linq.Expressions.Expression<System.Func<System.String>>>(() => searchModel.SearchString));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(19, "\r\n\r\n    ");
            }
            ));
            __builder.CloseComponent();
            __builder.AddMarkupContent(20, "\r\n");
            __builder.AddContent(21, "    ");
            __builder.OpenComponent<DevExpress.Blazor.DxDataGrid<Product>>(22);
            __builder.AddAttribute(23, "Data", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Collections.Generic.IEnumerable<Product>>(
#nullable restore
#line 30 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                       products

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(24, "ShowFilterRow", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Boolean>(
#nullable restore
#line 31 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                               true

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(25, "VerticalScrollBarMode", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<DevExpress.Blazor.ScrollBarMode>(
#nullable restore
#line 32 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                                        ScrollBarMode.Auto

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(26, "PageSize", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Int32>(
#nullable restore
#line 33 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                          30

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(27, "VerticalScrollableHeight", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.Int32>(
#nullable restore
#line 34 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                                          300

#line default
#line hidden
#nullable disable
            ));
            __builder.AddAttribute(28, "ChildContent", (Microsoft.AspNetCore.Components.RenderFragment)((__builder2) => {
                __builder2.AddMarkupContent(29, "\r\n\r\n        ");
                __builder2.OpenComponent<DevExpress.Blazor.DxDataGridColumn>(30);
                __builder2.AddAttribute(31, "Field", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.String>(
#nullable restore
#line 36 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                                  nameof(Product.ProductName)

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(32, "Caption", "Product Name");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(33, "\r\n\r\n        ");
                __builder2.OpenComponent<DevExpress.Blazor.DxDataGridColumn>(34);
                __builder2.AddAttribute(35, "Field", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.String>(
#nullable restore
#line 39 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                                  nameof(Product.Price)

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(36, "Caption", "Product Price");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(37, "\r\n\r\n        ");
                __builder2.OpenComponent<DevExpress.Blazor.DxDataGridColumn>(38);
                __builder2.AddAttribute(39, "Field", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.String>(
#nullable restore
#line 42 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                                  nameof(Product.Quantity)

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(40, "Caption", "Quantity");
                __builder2.AddAttribute(41, "Width", "85px");
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(42, "\r\n\r\n        ");
                __builder2.OpenComponent<DevExpress.Blazor.DxDataGridColumn>(43);
                __builder2.AddAttribute(44, "Field", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<System.String>(
#nullable restore
#line 45 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                                  nameof(Product.ProductID)

#line default
#line hidden
#nullable disable
                ));
                __builder2.AddAttribute(45, "Caption", "Basket");
                __builder2.AddAttribute(46, "DisplayTemplate", (Microsoft.AspNetCore.Components.RenderFragment<System.Object>)((context) => (__builder3) => {
                    __builder3.AddMarkupContent(47, "\r\n");
#nullable restore
#line 47 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                  
                    var rowProduct = (context as Product);
                

#line default
#line hidden
#nullable disable
                    __builder3.AddContent(48, "                ");
                    __builder3.OpenComponent<BlazorDemoPreview9.Pages.AddToBasket>(49);
                    __builder3.AddAttribute(50, "BasketProduct", Microsoft.AspNetCore.Components.CompilerServices.RuntimeHelpers.TypeCheck<BlazorDemoPreview9.Data.Product>(
#nullable restore
#line 50 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                                             rowProduct

#line default
#line hidden
#nullable disable
                    ));
                    __builder3.CloseComponent();
                    __builder3.AddMarkupContent(51, "\r\n\r\n            ");
                }
                ));
                __builder2.CloseComponent();
                __builder2.AddMarkupContent(52, "\r\n    ");
            }
            ));
            __builder.AddComponentReferenceCapture(53, (__value) => {
#nullable restore
#line 29 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
                       grid = (DevExpress.Blazor.DxDataGrid<Product>)__value;

#line default
#line hidden
#nullable disable
            }
            );
            __builder.CloseComponent();
            __builder.AddMarkupContent(54, "\r\n");
#nullable restore
#line 55 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
}

#line default
#line hidden
#nullable disable
        }
        #pragma warning restore 1998
#nullable restore
#line 56 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Shop.razor"
       
    DxDataGrid<Product> grid;
    Product[] products;
    SearchModel searchModel = new SearchModel();

    protected override async Task OnInitializedAsync()
    {
        products = await productService.GetProductsAsync();
    }

    protected async Task StartSearch()
    {
        products = await productService.GetProductsAsync(searchModel.SearchString);
    }


#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private AddToBasket addToBasket { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private BasketService basketService { get; set; }
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private ProductService productService { get; set; }
    }
}
#pragma warning restore 1591