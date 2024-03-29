#pragma checksum "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "83a4982ed41f4fc15847ee9b99d59def257b7c83"
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
#line 2 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor"
using BlazorDemoPreview9.Data;

#line default
#line hidden
#nullable disable
    [Microsoft.AspNetCore.Components.RouteAttribute("/Basket")]
    public class Basket : Microsoft.AspNetCore.Components.ComponentBase
    {
        #pragma warning disable 1998
        protected override void BuildRenderTree(Microsoft.AspNetCore.Components.Rendering.RenderTreeBuilder __builder)
        {
            __builder.OpenElement(0, "table");
            __builder.AddAttribute(1, "class", "basket");
            __builder.AddMarkupContent(2, "\r\n    ");
            __builder.AddMarkupContent(3, "<caption style=\"caption-side: top; text-align:center; font-size:x-large\"><strong>Basket</strong></caption>\r\n    ");
            __builder.AddMarkupContent(4, "<thead>\r\n        <tr>\r\n            <th>Product</th>\r\n            <th>Quantity</th>\r\n            <th>Price</th>\r\n            <th>Total</th>\r\n        </tr>\r\n    </thead>\r\n    ");
            __builder.OpenElement(5, "tbody");
            __builder.AddMarkupContent(6, "\r\n");
#nullable restore
#line 17 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor"
         foreach (var item in basketService.GetBasket())
        {

#line default
#line hidden
#nullable disable
            __builder.AddContent(7, "            ");
            __builder.OpenElement(8, "tr");
            __builder.AddMarkupContent(9, "\r\n                ");
            __builder.OpenElement(10, "td");
            __builder.AddContent(11, 
#nullable restore
#line 20 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor"
                     item.ProductName

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(12, "\r\n                ");
            __builder.OpenElement(13, "td");
            __builder.AddContent(14, 
#nullable restore
#line 21 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor"
                     item.Quantity

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(15, "\r\n                ");
            __builder.OpenElement(16, "td");
            __builder.AddContent(17, 
#nullable restore
#line 22 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor"
                      string.Format("{0:C}", item.Price)

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(18, "\r\n                ");
            __builder.OpenElement(19, "td");
            __builder.AddContent(20, 
#nullable restore
#line 23 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor"
                      string.Format("{0:C}", item.Total)

#line default
#line hidden
#nullable disable
            );
            __builder.CloseElement();
            __builder.AddMarkupContent(21, "\r\n            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(22, "\r\n");
#nullable restore
#line 25 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor"
            basketTotal = item.Total + basketTotal;
        }

#line default
#line hidden
#nullable disable
            __builder.AddContent(23, "    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(24, "\r\n    ");
            __builder.OpenElement(25, "tfoot");
            __builder.AddMarkupContent(26, "\r\n        ");
            __builder.OpenElement(27, "tr");
            __builder.AddMarkupContent(28, " \r\n            ");
            __builder.AddMarkupContent(29, "<td colspan=\"3\" style=\"text-align: right\">\r\n                <strong>Total:</strong>\r\n            </td>\r\n            ");
            __builder.OpenElement(30, "td");
            __builder.AddMarkupContent(31, "\r\n                ");
            __builder.AddContent(32, 
#nullable restore
#line 34 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor"
                  string.Format("{0:C}", basketTotal)

#line default
#line hidden
#nullable disable
            );
            __builder.AddMarkupContent(33, "\r\n            ");
            __builder.CloseElement();
            __builder.AddMarkupContent(34, "\r\n        ");
            __builder.CloseElement();
            __builder.AddMarkupContent(35, "\r\n    ");
            __builder.CloseElement();
            __builder.AddMarkupContent(36, "\r\n");
            __builder.CloseElement();
        }
        #pragma warning restore 1998
#nullable restore
#line 40 "C:\Users\Igor.Firsov\source\repos\BlazorDemoPreview9\BlazorDemoPreview9\Pages\Basket.razor"
       
    decimal basketTotal = 0;

    protected override void OnInitialized()
    {
        basketService.BasketHasChanged += BasketChanged;
    }

    private void BasketChanged(object sender, EventArgs e)
    {
        StateHasChanged();
    }


#line default
#line hidden
#nullable disable
        [global::Microsoft.AspNetCore.Components.InjectAttribute] private BasketService basketService { get; set; }
    }
}
#pragma warning restore 1591
