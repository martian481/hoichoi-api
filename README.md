<h1 align="center">
  <br>
  <a><img src="https://telegra.ph/file/7ccde141eb2d927425fa9.png" alt="Hoichoi API" width="300"></a>
  <br>
  <br>
  <b>Unofficial Hoichoi API</b>
  <br>
</h1>

 <br>
 

## Features :
- This Repository is totally free
- Unlimited API calls
- Generate Unlimited Download & Streaming Link


## Api Endpoint:<br>
**You need exact movie or webseries's episode url**
 - For movie 👉 <tt>https://www.hoichoi.tv/movies/dugga-2020</tt>
- For series 👉 <tt>https://www.hoichoi.tv/webseries/damayanti-s01-e03</tt>

**Request**

 `https://[YOUR-APP].vercel.app/?url=[Hoichoi-Url]`

*Ex.*

 `https://[YOUR-APP].vercel.app/?url=https://www.hoichoi.tv/movies/dugga-2020`

**Response**

```json
{
  "status": true,
  "title": "Dugga",
  "description": "Goddess Durga defeated the demons, but can Dugga - our protagonist, overpower the demons within her mind? Watch the full movie on Hoichoi.\n",
  "category": "Drama",
  "image": "https://snagfilms-a.akamaihd.net/7fa0ea9a-9799-4417-99f5-cbb5343c551d/images/2020/11/5/1604598395769_1280x720_16x9Images.jpg",
  "download": [
    {
      "codec": "H264",
      "renditionValue": "_270p",
      "url": "https://hoichoimp4ns.akamaized.net/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/1604595730352_dugga_hoichoi_270.mp4?__token__=exp=1604941961~acl=/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/*~hmac=96c34561ed16177c914d203e4053a542052e25c2a561bc0a3e1cfa5dbfe5c61f"
    },
    {
      "codec": "H264",
      "renditionValue": "_360p",
      "url": "https://hoichoimp4ns.akamaized.net/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/1604595730352_dugga_hoichoi_360.mp4?__token__=exp=1604941961~acl=/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/*~hmac=96c34561ed16177c914d203e4053a542052e25c2a561bc0a3e1cfa5dbfe5c61f"
    },
    {
      "codec": "H264",
      "renditionValue": "_720p",
      "url": "https://hoichoimp4ns.akamaized.net/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/1604595730352_dugga_hoichoi_720.mp4?__token__=exp=1604941961~acl=/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/*~hmac=96c34561ed16177c914d203e4053a542052e25c2a561bc0a3e1cfa5dbfe5c61f"
    }
  ],
  "hls": "https://hoichoihlsns.akamaized.net/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/hls/1604595730352_dugga_hoichoi.m3u8?hdnts=exp=1604941961~acl=/vhoichoiindia2/Renditions/20201105/1604595730352_dugga_hoichoi/hls/*~hmac=44fffc9626049487978953544c62393ee88ade0bc745c06810507b1b969788a2"
}
```


## Deploy :<br>
*Deployment is very simple, We prefer serverless function that's why we used Vercel*

**Requirements :**
- A Vercel account (Free)
- A Hoichoi Account, Make sure no user will stream with this account.

**Start :**

Tap this below button and Deploy it on Vercel<br><br>
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fviewlift-ripper%2Fhoichoi-api)

**You have to set two Environment variables**

<code>EMAIL</code><br>
<code>PASSWORD</code>

Give your Hoichoi Email ID in <code>EMAIL</code> section<br>
Give your Hoichoi Password in <code>PASSWORD</code> section<br>

**That's It, Now make some usefull stuff from it.**

## Exception Handling :<br>

**You will get Error in these cases 👇**

1. If entered Invalid Url
2. If the email password are not working
3. If the content is DRM Protected
4. If Maximum Stream Limit reached (Because someone is watching content on Official Hoichoi Website or App)
5. If Something unexpected will happened (Possibly Never)

*You will get <code>"status": false</code> with a Error Message in these cases*

## Function Cache
 Every successful result will be cached for 500 Seconds