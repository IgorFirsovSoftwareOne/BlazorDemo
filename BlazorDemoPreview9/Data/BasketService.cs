using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlazorDemoPreview9.Data
{
    public class BasketService
    {
        //basket erst einmal als liste anlegen
        private List<BasketItem> Basket { get; set; }
        public event EventHandler BasketHasChanged;

        public int ItemsInBasket => Basket.Count;

        //konstruktor in dem die lsite instanziiert wird
        public BasketService(ProductContext context)
        {
            Basket = new List<BasketItem>();
        }

        public BasketItem[] GetBasket()
        {
            return Basket.ToArray();
        }

        public void AddItem(BasketItem basketItem)
        {
            Basket.Add(basketItem);
            BasketHasChanged?.Invoke(this, new EventArgs());
        }

        public void AddItem(Product product, int quantity)
        {
            //erstelle basketItem aus product
            BasketItem basketItem = new BasketItem();
            basketItem.ProductID = product.ProductID;
            basketItem.ProductName = product.ProductName;
            basketItem.Price = product.Price;
            basketItem.Quantity = quantity;

            AddItem(basketItem);
        }
        
    }
}