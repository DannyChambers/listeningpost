const puppeteer = require('puppeteer');
var fs = require('fs');
//import schedule from 'node-schedule'

//schedule.scheduleJob('0 0 * * *', () => {//Each day at midnight

	(async function scrapeMessages(url){
		try {

			const term1 = "i%20feel"

			const browser = await puppeteer.launch({headless: false});
			const page = await browser.newPage();
			page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X x.y; rv:42.0) Gecko/20100101 Firefox/42.0')

			await page.goto('https://www.twitter.com/login');
			await page.waitFor('input[name="session[username_or_email]"]');
			await page.type('input[name="session[username_or_email]"]','theligh24114489',{delay: 25});
			await page.type('input[name="session[password]"]','Lighthouse_2020!',{delay: 25});
			await page.click('[data-testid="LoginForm_Login_Button"]')
			await page.waitFor(1000)
			await page.goto('https://twitter.com/search?q=' + term1 + '&src=typed_query&f=live');

			/*await page.evaluate( () => {Not working
                window.scrollBy(0, 10000);
			});
			
			await page.waitFor(10000);//Wait 10 seconds for tweets to load*/

			const allTweets = await page.$$('div[lang="en"]');//Get all the tweets on the page //NOT WORKING EMTY ARRAY

			console.log("allTweets: ", allTweets)//Empty array...

			/*for(const tweet of allTweets){

				tweet = tweet.replace(/<[^>]*>?/gm, '');

				console.log(tweet)

			}*/




			/*Create a json objectfrom the gathered tweets and write them to a file for the day
			var data = {}
			data.table = []
			for (i=0; i <26 ; i++){// change to for of
			   var obj = {
				   id: i,
				   square: i * i
			   }
			   data.table.push(obj)
			}
			fs.writeFile ("messages.json", JSON.stringify(data), function(err) {
				if (err) throw err;
				console.log('complete');
				}
			);
			*/






		} catch(e) {
			console.log('Error in scraper: ', e)
		}
	})()





	

//})
