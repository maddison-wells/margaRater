# margaRater

This is a small tool to rate the prices of margarita ingredients from my local liquor stores.

## MVP

- Build a react.js app that scraps data from Liquorland, BWS, Dan Murphys and First Choice using either pupperteer or selenium
- Add a recipe section

### Bonus

- Would like to expolre making it into a chrome extension

## References

- Font used - [Las locuras del emperador](https://www.dafont.com/las-locuras-del-emperador.font)

## Update Logs

### 21st April

#### Progress

- Was able to pull the data using axios into the console but need to review to be able to render into the component

#### Notes

Although Puppeteer appeared to be a good starting point, I was getting errors that I had been blocked from the websites when trying to scrape the information I needed.

I decided to look for a Google Shopping API, which I found via [SERPAPI Google Shopping API](https://serpapi.com/google-shopping-api)

After reading through the docs, there seems to be a few was to use this API but for now have settled on using axios to fetch the results

### Tasks

- Need to render data correctly after filtering the exact results I want
- Once rendered, compelete styling
- Research Google Chrome Extensions for deployment

### Thursday 11th April

#### Progress

- Read Puppeteer docs
- Picked a font and some styling ideas out

#### Notes

After doing some research, it appears that Puppeteer may be the better option for me right now. This is based on the fact that it seems less complex to get started and is often more popular amoungst javascript developers and chrome users. As I plan to maybe turn this into a chrome extention in the long run, Pupperteer seems the way to go.

#### Tasks to get started

- Research which would be better to use, pupperteer or selenium

- Read docs once decided and start to write the webscrapping code

- Look into styling vibes

#### Tasks to be completed

#### Bigger Tasks
