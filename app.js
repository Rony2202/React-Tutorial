import React from "react";
import ReactDOM from "react-dom/client";

/**
 *            FOOD APP
 * Header
 *  - Logo
 *  - Nav bar
 * Body
 *  - Reastaurantcontainer
 *  - Reastaurantcard
 *    - img
 *    - name of res
 *    - star rating
 *    - cuisins
 *    - delevari time
 * Footer
 *  - Copyright
 *  - Links
 *  - Adress
 *  - Contact
 *
 */

const Header = () => {
  return (
    <div className="Header">
      <div className="Logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgf8RlcJGMxRvmAYnx_DWa69f1t5jfr30W6g&usqp=CAU" />
      </div>
      <div className="Navitems">
        <ul>
          <li>Home</li>
          <li>Aout</li>
          <li>contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const Reastaurantcard = (props) => {
  
  
   const { resData } = props;


  
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRatingString} star</h4>
      <h4>{resData.info.slaString}</h4>
      <h4>{resData.info.costForTwo}</h4>
    </div>
  );
};
const resList = [
  
   {
      info: {
        id: "482719",
        name: "Burger Tales",
        cloudinaryImageId: "ylyk7xf4kkrb3isijkdd",
        locality: "Beach Road",
        areaName: "Kuttichira",
        costForTwo: "₹350 for two",
        cuisines: ["Fast Food", "Snacks", "Beverages"],
        avgRating: 4.1,
        parentId: "51465",
        avgRatingString: "4.1",
        totalRatingsString: "7",
        sla: {
          deliveryTime: 39,
          lastMileTravel: 5.9,
          serviceability: "SERVICEABLE",
          slaString: "39 mins",
          lastMileTravelString: "5.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-19 22:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            maxDuration: "3000",
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-a5a20bad-1ff8-4000-8769-4df4fbd3f56e",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/burger-tales-beach-road-kuttichira-482719",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
    },
    {
      info: {
        id: "377529",
        name: "Suprabatham Veg",
        cloudinaryImageId: "ukkna38gkgfjdrgm8lxt",
        locality: "Beach Road",
        areaName: "Beach Road",
        costForTwo: "₹300 for two",
        cuisines: ["Chinese", "North Indian", "South Indian", "Biryani"],
        avgRating: 4.5,
        veg: true,
        parentId: "197567",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 6.2,
          serviceability: "SERVICEABLE",
          slaString: "43 mins",
          lastMileTravelString: "6.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-19 21:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "UPTO ₹40",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            maxDuration: "3000",
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-a5a20bad-1ff8-4000-8769-4df4fbd3f56e",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/suprabatham-veg-beach-road-377529",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
    },
    {
      info: {
        id: "705031",
        name: "Starbucks Coffee",
        cloudinaryImageId: "2418209798927d733a50f5d2ebcc2aee",
        locality: "Beach Rd",
        areaName: "Mananchira",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.4,
        parentId: "195515",
        avgRatingString: "4.4",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 6,
          serviceability: "SERVICEABLE",
          slaString: "43 mins",
          lastMileTravelString: "6.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-19 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            maxDuration: "3000",
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-a5a20bad-1ff8-4000-8769-4df4fbd3f56e",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/starbucks-coffee-beach-rd-mananchira-705031",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
    },
    {
      info: {
        id: "701437",
        name: "1980's A Nostalgic Restaurant",
        cloudinaryImageId: "61083fda84a333a06234a511f870412b",
        locality: "Sona building silk street",
        areaName: "Beach Road",
        costForTwo: "₹250 for two",
        cuisines: ["Indian", "North Indian", "Snacks", "Juices"],
        avgRating: 3.9,
        parentId: "419079",
        avgRatingString: "3.9",
        totalRatingsString: "50+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 6.3,
          serviceability: "SERVICEABLE",
          slaString: "43 mins",
          lastMileTravelString: "6.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-19 23:45:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            maxDuration: "3000",
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-a5a20bad-1ff8-4000-8769-4df4fbd3f56e",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/1980s-a-nostalgic-restaurant-sona-building-silk-street-beach-road-701437",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
    },
    {
      info: {
        id: "549081",
        name: "Bombay Hotel",
        cloudinaryImageId: "utwvwtb4wt4ny71ijid0",
        locality: "Silk Street",
        areaName: "Palayam",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "South Indian", "Biryani"],
        avgRating: 4.3,
        parentId: "48744",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 6.2,
          serviceability: "SERVICEABLE",
          slaString: "43 mins",
          lastMileTravelString: "6.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-19 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            maxDuration: "3000",
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-a5a20bad-1ff8-4000-8769-4df4fbd3f56e",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/bombay-hotel-silk-street-palayam-549081",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
    },
    {
      info: {
        id: "805452",
        name: "Nothing Before Coffee",
        cloudinaryImageId: "cb7b2fa36a107c5d51503b03594939fe",
        locality: "Mananchira",
        areaName: "Beach Road",
        costForTwo: "₹200 for two",
        cuisines: ["Indian", "Beverages", "Juices"],
        avgRating: 4.3,
        veg: true,
        parentId: "6307",
        avgRatingString: "4.3",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 6.3,
          serviceability: "SERVICEABLE",
          slaString: "43 mins",
          lastMileTravelString: "6.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-20 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            maxDuration: "3000",
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-a5a20bad-1ff8-4000-8769-4df4fbd3f56e",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/nothing-before-coffee-mananchira-beach-road-805452",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
    },
    {
      info: {
        id: "397518",
        name: "Kofta",
        cloudinaryImageId: "ohezyptnh00xtcpfujqw",
        locality: "Convent Road",
        areaName: "Vellayil",
        costForTwo: "₹200 for two",
        cuisines: ["Continental"],
        avgRating: 3.8,
        parentId: "248945",
        avgRatingString: "3.8",
        totalRatingsString: "10+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 6.4,
          serviceability: "SERVICEABLE",
          slaString: "43 mins",
          lastMileTravelString: "6.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-19 20:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            maxDuration: "3000",
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-a5a20bad-1ff8-4000-8769-4df4fbd3f56e",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/kofta-convent-road-vellayil-397518",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
    },
    {
      info: {
        id: "722339",
        name: "Top Form_SM Street",
        cloudinaryImageId: "b5303a94c367062c158ce278bf6307a3",
        locality: "Calicut Top Form",
        areaName: "S M Street",
        costForTwo: "₹400 for two",
        cuisines: ["Kerala", "South Indian", "Chinese", "Biryani"],
        avgRating: 4.3,
        parentId: "454776",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 43,
          lastMileTravel: 6.8,
          serviceability: "SERVICEABLE",
          slaString: "43 mins",
          lastMileTravelString: "6.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-19 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            maxDuration: "3000",
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-a5a20bad-1ff8-4000-8769-4df4fbd3f56e",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/top-form-sm-street-calicut-top-form-s-m-street-722339",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
    },
    {
      info: {
        id: "105952",
        name: "Sher-E-Punjab",
        cloudinaryImageId: "zrfiwlqwtgge0cv2gejn",
        locality: "Kallai Road",
        areaName: "Palayam",
        costForTwo: "₹200 for two",
        cuisines: ["North Indian", "Punjabi", "North Eastern"],
        avgRating: 4.2,
        parentId: "840",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 47,
          lastMileTravel: 7,
          serviceability: "SERVICEABLE",
          slaString: "47 mins",
          lastMileTravelString: "7.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-03-19 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            maxDuration: "3000",
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
      analytics: {
        context: "seo-data-a5a20bad-1ff8-4000-8769-4df4fbd3f56e",
      },
      cta: {
        link: "https://www.swiggy.com/restaurants/sher-e-punjab-kallai-road-palayam-105952",
        text: "RESTAURANT_MENU",
        type: "WEBLINK",
      },
      widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_BCP_byName",
    }
   ];

   // Not using key (is no acceptabl) is their is no key use index as key (but it is not a good  way)

const Body = () => {
  return (
    <div className="Body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
        <Reastaurantcard key = {restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);