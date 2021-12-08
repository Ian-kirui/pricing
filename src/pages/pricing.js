import React from "react"
import PriceCard from "../components/PriceCard"
import GoldAd from "../components/GoldAd"
import ProductCardSponsor from "../components/productCardSponsor"
import SocialProductCard from "../components/socialProductCard"
import SilverBizCard from "../components/silverBizCard"
import GoldBizCard from "../components/GoldCard"
import BannerCard from "../components/bannerCard"
import * as styles from "./pricing.module.css"
import SellerBagde from "../images/seller badge.svg"

const pricing = () => {
  return (
    <>
      <section style={{ padding: "40px" }}>
        <div className={styles.container}>
          <h1>Silver Ad prices /Category</h1>
          <p>upgrade your ad increase visibility</p>
          <div className={styles.priceCardWrapper}>
            <div className={styles.priceCards}>
              <PriceCard />
            </div>
          </div>
        </div>
      </section>
      <section
        style={{
          backgroundColor: "#F3F3F3",
          padding: "40px",
        }}
      >
        <div className={styles.container}>
          <h1>Gold Ad prices</h1>
        </div>
        <div className={styles.priceCardWrapper}>
          <div className={styles.priceCards}>
            <GoldAd />
          </div>
          <div className={styles.container}>
            <ul>
              <li>Get higher priority in searches</li>
              <li>Appear in the Home Page carousel</li>
            </ul>
          </div>
        </div>
      </section>
      <section style={{ padding: "40px" }}>
        <div className={styles.container}>
          <h1>Business Pages</h1>
          <p>upgrade your ad increase visibility</p>
        </div>
        <div className={styles.priceCardWrapper}>
          <div className={styles.priceCards}>
            <GoldBizCard />
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
            <SilverBizCard />
          </div>
        </div>
      </section>
      <section style={{ padding: "40px" }}>
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
      {/* <section style={{ padding: "40px" }}>
        <div className={styles.container}>
          <h1>Price Per Ad</h1>
          <p>
            While it is free to post across majority of our platform, we allow
            for limited ads on some categories.
          </p>
        </div>
        <div className={styles.priceCardWrapper}>
          <div className={styles.priceCards}>
            {silverData.map((item, index) => (
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
      </section> */}
      <section style={{ backgroundColor: "#F3F3F3", padding: "40px" }}>
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
            <ProductCardSponsor />
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
            <SocialProductCard />
          </div>
        </div>
      </section>
      <section style={{ padding: "60px" }}>
        <div className={styles.brandContainer}>
          <h1>Banners</h1>

          <p>
            Capture our audience using our banner space showcase your business
            and product.
          </p>
        </div>
        <div className={styles.bannerCardWrapper}>
          <BannerCard />
        </div>
      </section>
    </>
  )
}

export default pricing
