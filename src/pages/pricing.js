import React from "react"
import PriceCard from "../components/pricecard"
import ProductCard from "../components/productCard"
import GoldCard from "../components/goldCard"
import BusinessCard from "../components/businessCard"
import BannerCard from "../components/bannerCard"
import * as styles from "./pricing.module.css"
import SellerBagde from "../../public/assets/seller badge.svg"

const pricing = () => {
  const electronics = [
    {
      category: "electronics",
      price: "kes.200",
    },
    {
      category: "electronics",
      price: "kes.200",
    },
    {
      category: "electronics",
      price: "kes.200",
    },
    {
      category: "electronics",
      price: "kes.200",
    },
    {
      category: "electronics",
      price: "kes.200",
    },
    {
      category: "electronics",
      price: "kes.200",
    },
    {
      category: "electronics",
      price: "kes.200",
    },
    {
      category: "electronics",
      price: "kes.200",
    },
  ]

  const gold = [
    {
      category: "electronics",
      price: "kes.200",
    },
    {
      category: "electronics",
      price: "kes.200",
    },
    {
      category: "electronics",
      price: "kes.200",
    },
  ]
  const bizCard = [
    {
      title: "Gold Business",
      duration: "1 year",
      price: "Ksh 45,000",
    },
    {
      title: "Gold Business",
      duration: "6 months",
      price: "Ksh 25,000",
    },
    {
      title: "Gold Business",
      duration: "3 months",
      price: "Ksh 13,500",
    },
    {
      title: "Gold Business",
      duration: "1 month",
      price: "Ksh 5,000",
    },
  ]
  const brandProduct = [
    {
      duration: "1 year",
      price: "Ksh 2,500",
    },
  ]

  const banner = [
    {
      title: " desktop",
      duration: "1 month ",
      price: "ksh 25,000",
    },
    {
      title: " desktop",
      duration: "1 month ",
      price: "ksh 25,000",
    },
    {
      title: " desktop",
      duration: "1 month ",
      price: "ksh 25,000",
    },
    {
      title: " desktop",
      duration: "1 month ",
      price: "ksh 25,000",
    },
    {
      title: " desktop",
      duration: "1 month ",
      price: "ksh 25,000",
    },
    {
      title: " desktop",
      duration: "1 month ",
      price: "ksh 25,000",
    },
    {
      title: " desktop",
      duration: "1 month ",
      price: "ksh 25,000",
    },
  ]

  return (
    <>
      <section>
        <div className={styles.container}>
          <h1>Silver Ad prices /Category</h1>
          <p>upgrade your ad increase visibility</p>
          <div className={styles.priceCardWrapper}>
            <div className={styles.priceCards}>
              {electronics.map((item, index) => (
                <PriceCard
                  key={index}
                  category={item.category}
                  price={item.price}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#F3F3F3" }}>
        <div className={styles.container}>
          <h1>Gold Ad prices</h1>
        </div>
        <div className={styles.priceCardWrapper}>
          <div className={styles.priceCards}>
            {gold.map((item, index) => (
              <GoldCard
                key={index}
                category={item.duration}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <h1>Business Pages</h1>
          <p>upgrade your ad increase visibility</p>
        </div>
        <div className={styles.priceCardWrapper}>
          <div className={styles.priceCards}>
            {bizCard.map((item, index) => (
              <BusinessCard
                key={index}
                duration={item.duration}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className={styles.container}>
          <ul>
            <li>Business logo on all your ads including free</li>
            <li>Top priority in the homepage carousel.</li>
            <li>Top of the list in the business directory</li>
            <li>More from this seller under all your ads.</li>
          </ul>
        </div>
        <div className={styles.priceCardWrapper}>
          <div className={styles.priceCards}>
            {bizCard.map((item, index) => (
              <BusinessCard
                key={index}
                duration={item.duration}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
      <section style={{ backgroundColor: "#F3F3F3" }}>
        <div className={styles.badgeContainer}>
          <h1>Verified Seller Badge</h1>
          <p>Get verified and join our trusted seller group</p>
          <img src={SellerBagde}></img>
          <p>
            We will need a copy of your Business Certificate / Certificate of
            incorporation, KRA Pin and National ID of the business owner.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.container}>
          <h1>Price Per Ad</h1>
          <p>
            While it is free to post across majority of our platform, we allow
            for limited ads on some categories.
          </p>
        </div>
        <div className={styles.priceCardWrapper}>
          <div className={styles.priceCards}>
            {electronics.map((item, index) => (
              <PriceCard
                key={index}
                category={item.category}
                price={item.price}
              />
            ))}
          </div>
          <p>
            This price is only for free ads. Refer to single ad upgrade prices
            to upgrade your ad.
          </p>
        </div>
      </section>
      <section style={{ backgroundColor: "#F3F3F3" }}>
        <div className={styles.brandContainer}>
          <h1>Branding products</h1>
          <h1>Category Sponsor</h1>
          <p>
            Buy a category sponsor and be a boss of the category. Appear on top
            of each category and sub categories under it.
          </p>
        </div>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCard}>
            {brandProduct.map((item, index) => (
              <ProductCard
                key={index}
                category={item.duration}
                price={item.price}
              />
            ))}
          </div>
        </div>
        <div className={styles.brandContainer}>
          <h1>Social Media Product</h1>

          <p>
            Buy our social media product and reach our Facebook users. Send a
            targeted mailshot to user base and increase your brands awareness.
          </p>
        </div>
        <div className={styles.productCardWrapper}>
          <div className={styles.productCard}>
            {brandProduct.map((item, index) => (
              <ProductCard
                key={index}
                category={item.duration}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className={styles.brandContainer}>
          <h1>Banners</h1>

          <p>
            Capture our audience using our banner space showcase your business
            and product.
          </p>
        </div>
        <div className={styles.bannerCardWrapper}>
          <div className={styles.bannerCards}>
            {banner.map((item, index) => (
              <BannerCard key={index} title={item.title} price={item.price} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default pricing
