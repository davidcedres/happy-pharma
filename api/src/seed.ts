import { PrismaClient } from "@prisma/client";
import { ApiItem } from "./types";

const prisma = new PrismaClient();

const seed = async () => {
    const { items } = await fetch(
        "https://gw-backend-ve.farmatodo.com/_ah/api/categoryEndpoint/getProductsFromCategoryAlgolia?categoryId=10&hitsPerPage=24&isWeb=true&order=null&page=5&subscribeAndSave=false&idCustomerWebSafe=ahZzfm9yYWNsZS1zZXJ2aWNlcy12emxhci4LEgRVc2VyIiRkMGViOTkxZi1mMGNlLTQ5N2MtOTJjMS00OTQxMjVkNjJiZTQM&source=WEB&idStoreGroup=146&token=ac2df7a7e4258f8904b39f0eb5a5ecbb&tokenIdWebSafe=ahZzfm9yYWNsZS1zZXJ2aWNlcy12emxhcl0LEgRVc2VyIiRkMGViOTkxZi1mMGNlLTQ5N2MtOTJjMS00OTQxMjVkNjJiZTQMCxIFVG9rZW4iJGEyMDI5MWIxLWU1ZGYtNDllZi1iYTM1LTk1N2ZlMDQ5NTY5Zgw&key=AIzaSyAidR6Tt0K60gACR78aWThMQb7L5u6Wpag&deliveryType=EXPRESS&storeId=146&city=CCS",
        {
            headers: {
                accept: "application/json, text/plain, */*",
                "accept-language": "en-US,en;q=0.9",
                "content-type": "application/json",
                country: "VEN",
                priority: "u=1, i",
                "sec-ch-ua": '"Not A(Brand";v="8", "Chromium";v="132"',
                "sec-ch-ua-mobile": "?0",
                "sec-ch-ua-platform": '"macOS"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "cross-site",
                source: "WEB",
            },
            referrerPolicy: "no-referrer",
            body: null,
            method: "GET",
        }
    ).then((response) => response.json() as unknown as { items: ApiItem[] });

    await prisma.drug.createMany({
        data: items.map((item) => ({
            remoteKey: Number(item.id),
            brand: item.marca,
            imageUrl: item.mediaImageUrl,
            price: item.fullPrice,
            offerPrice: item.offerPrice,
            shortDescription: item.mediaDescription,
            longDescription: item.largeDescription,
        })),
    });

    console.log("ok");
};

seed();
