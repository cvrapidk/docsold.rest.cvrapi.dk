jQuery(document).ready(function()
{
	var responses = {
		"[id='errormessages-example']": '{"error":"INTERNAL_ERROR","message":"An internal error has occurred. Please try again or reach out to inform about the error."}',
		"[id='retrieve-company-example']": '{"vat":"18966239","address":{"street":"Michael Drewsens Vej","streetcode":"5433","numberfrom":"22","numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":"8270","cityname":"Højbjerg","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"municode":"751","muniname":"AARHUS","mailbox":null,"start":"2012-03-16","end":null,"timestamp":"2012-03-16"},"companyform":{"code":"80","description":"APS","longdescription":"Anpartsselskab"},"companystatus":{"text":"NORMAL","start":"1995-10-16"},"contact":{"email":"finance@proshop.dk","www":"http://www.proshop.dk","phone":"70205080","fax":"70701223"},"status":{"code":null,"creditcode":null,"start":null,"end":null,"bankrupt":false},"industrycode":{"code":"479112","text":"Detailhandel med elektroniske eller elektriske apparater samt fotoudstyr via internet"},"life":{"start":"1995-10-16","end":null,"name":"PROSHOP ApS","adprotected":false},"accounting":{"period":{"start":"--01-01","end":"--12-31"},"first":{"start":"1995-10-16","end":"1996-12-31"},"revision":true,"documents":[{"url":"https://regnskaber.cvrapi.dk/93266981/ZG9rdW1lbnRsYWdlcjovLzAzLzU0LzIyLzdjL2Y5L2FhNTQtNDUxOC1hNTZkLTc3OWY0MGM5NjFlNw.pdf","type":"AARSRAPPORT","start":"2017-01-01","end":"2017-12-31","publicdate":"2018-02-08","extension":"pdf","summary":{"start":"2017-01-01","end":"2017-12-31","revenue":"952630000","grossprofitloss":"49204000","employeebenefitsexpense":"-37428000","depreciationamortisationexpenseprofitorloss":"-3876000","profitlossfromordinaryoperatingactivities":"7695000","incomefrominvestmentsingroupenterprises":"4043000","otherfinanceincome":"3307000","otherfinanceexpenses":"-3422000","profitlossfromordinaryactivitiesbeforetax":"11623000","taxexpenseonordinaryactivities":null,"taxexpense":"1658000","profitloss":"9965000","equity":"41025000","assets":"175537000","proposeddividendrecognisedinequity":"11000000","proposeddividend":null,"dividend":null,"noncurrentassets":"23469000","landandbuildings":null,"currentassets":"152068000","inventories":"83422000","shorttermtradereceivables":"26897000","cashandcashequivalents":"14152000","equityloan":null,"provisions":"647000","longtermliabilitiesotherthanprovisions":null,"shorttermliabilitiesotherthanprovisions":"133865000","liabilitiesandequity":"175537000","coverage":5.165069334369062,"operatingmargin":0.8077637697742039,"roi":4.383691187612868,"liquidityratio":113.59802786389272,"solvencyratio":23.3711411269419,"equityreturn":28.331505179768435,"averagenumberofemployees":"71"}}],"tax":[{"year":2016,"tradeid":18966239,"managementvat":37178489,"companytype":"Datterselskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":0,"deficit":0,"paidtax":0,"tonnageorcarbon":null}]},"capital":{"capital":"500000.00","currency":"DKK","partial":false,"ipo":false},"shareholder":{"below_5_percent":false,"public":false},"info":{"articles_of_association":"2011-06-09","purpose":"Selskabets formål er at drive internetbaseret detail- og erhvervsvirksomhed med salg af husholdningsapparater, tv-, radio-, homeoffice-, foto- og teleprodukter samt hermed beslægtede produkter.","bind":"Selskabet tegnes af direktøren i forening med bestyrelsesformanden eller af den samlede bestyrelse.","modes":{"legislation_money_laundering":false,"social_economic":false,"government":false}},"secondarynames":["MEDIA OPTIQA ApS","PROSHOP DIRECT ApS","PROSHOP DIREKTE ApS","MULTI MEDIA PROSHOP ApS","HAPPII ApS","HAPPII MOBIL ApS","HAPPII PROSHOP ApS","SHG.DK ApS","PRC DATA ApS","PRO COMPONENTS ApS"],"industrycodes":[],"subsidiaries":["1021961368","1004207027","1003628582","1021961376"],"employment":[{"months":[{"intervalAmountEmployees":"ANTAL_100_199","amountEmployeesLow":"100","amountEmployeesHigh":"199","year":"2017","month":"12"}],"quarters":[{"intervalAmountEmployees":"ANTAL_100_199","amountEmployeesLow":"100","amountEmployeesHigh":"199","year":"2017","quarter":"4"},{"intervalAmountEmployees":"ANTAL_100_199","amountEmployeesLow":"100","amountEmployeesHigh":"199","year":"2017","quarter":"3"},{"intervalAmountEmployees":"ANTAL_100_199","amountEmployeesLow":"100","amountEmployeesHigh":"199","year":"2017","quarter":"2"},{"intervalAmountEmployees":"ANTAL_100_199","amountEmployeesLow":"100","amountEmployeesHigh":"199","year":"2017","quarter":"1"}]}],"participants":[{"participantnumber":"4004020964","life":{"name":"Poul Thyregod","profession":"Direktør","deceased":false},"participant":true,"roles":[{"type":"founder","life":{"start":"1995-10-16","end":null,"title":"Direktør Poul Thyregod Madsen Park Alle 9, 1 th, 8000 Aarhus C"}},{"type":"board","life":{"start":"2017-02-07","end":null,"title":"Formand"}},{"type":"real_owner","life":{"owner_percent":33.33,"owner_voting_percent":33.33,"special_ownership":"Har indirekte besiddelser","start":"2015-10-29","end":null}}]},{"participantnumber":"4004135589","life":{"name":"Ivan Jæger Christiansen","profession":null,"deceased":false},"participant":true,"roles":[{"type":"director","life":{"start":"2017-02-07","end":null,"title":"Direktør"}}]},{"vat":"37178489","companyform":{"code":"60","description":"A/S","longdescription":"Aktieselskab"},"companystatus":{"text":"NORMAL","start":"2015-10-23"},"life":{"start":"2015-10-23","end":null,"name":"Proshop Holding A/S","adprotected":true},"company":true,"roles":[{"type":"owner","life":{"owner_percent":100,"owner_voting_percent":100,"start":"2015-10-29","end":null}}]}],"participations":[{"vat":"25339673","companyform":{"code":"80","description":"APS","longdescription":"Anpartsselskab"},"companystatus":{"text":"NORMAL","start":"2000-03-28"},"life":{"start":"2000-03-28","end":null,"name":"Ejendom 22 ApS","adprotected":true},"company":true,"roles":[{"type":"owner","life":{"owner_percent":100,"owner_voting_percent":100,"start":"2015-10-27","end":null}}]}]}',
		"[id='retrieve-subsidiary-example']": '{"subsidiarynumber":"1003628582","vat":"18966239","address":{"street":"Michael Drewsens Vej","streetcode":"5433","numberfrom":"22","numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":"8270","cityname":"H\u00f8jbjerg","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"municode":"751","muniname":"AARHUS","mailbox":null,"start":null,"end":null,"timestamp":null},"contact":{"email":"support@proshop.dk","phone":"86766030","fax":"70701223"},"industrycode":{"code":"479112","text":"Detailhandel med elektroniske eller elektriske apparater samt fotoudstyr via internet"},"life":{"start":"1995-10-01","end":null,"name":"PROSHOP ApS","adprotected":false},"industrycodes":[]}',
		"[id='retrieve-participant-example']": '{"participantnumber":"4004020964","address":{"street":"Vejnavn","streetcode":"134","numberfrom":"1","numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":"8000","cityname":"Århus C","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"municode":"751","muniname":"AARHUS","mailbox":null,"start":null,"end":null,"timestamp":null},"contact":{"email":null,"phone":null},"life":{"name":"Poul Thyregod","profession":"Direktør","deceased":false},"roles":[{"vat":"37178489","companyform":{"code":"60","description":"A/S","longdescription":"Aktieselskab"},"companystatus":{"text":"NORMAL","start":"2015-10-23"},"life":{"start":"2015-10-23","end":null,"name":"Proshop Holding A/S","adprotected":true},"roles":[{"type":"board","life":{"start":"2015-10-23","end":null,"title":"Formand"}},{"type":"real_owner","life":{"owner_percent":33.33,"owner_voting_percent":33.33,"special_ownership":"Har indirekte besiddelser","start":"2015-11-03","end":null}}]},{"vat":"18966239","companyform":{"code":"80","description":"APS","longdescription":"Anpartsselskab"},"companystatus":{"text":"NORMAL","start":"1995-10-16"},"life":{"start":"1995-10-16","end":null,"name":"PROSHOP ApS","adprotected":false},"roles":[{"type":"founder","life":{"start":"1995-10-16","end":null,"title":"Direktør Poul Thyregod Madsen Park Alle 9, 1 th, 8000 Aarhus C"}},{"type":"board","life":{"start":"2012-02-01","end":"2015-10-20","title":null}},{"type":"board","life":{"start":"2016-01-20","end":"2017-02-06","title":"Bestyrelsesmedlem"}},{"type":"board","life":{"start":"2015-10-21","end":"2016-01-19","title":"Formand"}},{"type":"board","life":{"start":"2017-02-07","end":null,"title":"Formand"}},{"type":"board","life":{"start":"1995-10-16","end":"2010-12-08","title":null}},{"type":"director","life":{"start":"2016-01-20","end":"2017-02-07","title":"Direktør"}},{"type":"director","life":{"start":"1997-05-01","end":"2012-02-01","title":"Adm. dir"}},{"type":"real_owner","life":{"owner_percent":33.33,"owner_voting_percent":33.33,"special_ownership":"Har indirekte besiddelser","start":"2015-10-29","end":null}}]}]}',
		"[id='suggest-company-example']": '[{"vat":10150817,"address":{"street":"Langelinie Allé","numberfrom":17,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":2100,"cityname":"København Ø","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"KØBENHAVN","mailbox":null},"companyform":{"code":230,"description":"STA","longdescription":"Statslig administrativ enhed"},"companystatus":{"text":"AKTIV"},"contact":{"email":null,"www":null,"phone":35291000,"fax":null},"industrycode":{"code":841300,"text":"Administration af og bidrag til erhvervsfremme"},"life":{"start":"1964-04-01","end":null,"name":"Erhvervsstyrelsen","adprotected":false},"secondarynames":[],"accounting":{"start":null,"end":null,"revision":null,"documents":null,"tax":[{"year":2012,"tradeid":28866984,"managementvat":null,"companytype":"Enkeltstående selskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":12603031,"deficit":0,"paidtax":3150750,"tonnageorcarbon":null},{"year":2013,"tradeid":28866984,"managementvat":null,"companytype":"Enkeltstående selskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":13758005,"deficit":0,"paidtax":3439500,"tonnageorcarbon":null},{"year":2014,"tradeid":28866984,"managementvat":null,"companytype":"Enkeltstående selskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":13548433,"deficit":0,"paidtax":3319358,"tonnageorcarbon":null}]},"capital":{"capital":null,"currency":null},"industrycodes":[],"subsidiaries":[1017951463,1014085897],"employment":[{"quarter":[{"intervalAmountEmployees":"ANTAL_500_999","amountEmployeesLow":500,"amountEmployeesHigh":999,"year":2014,"quarter":3},{"intervalAmountEmployees":"ANTAL_500_999","amountEmployeesLow":500,"amountEmployeesHigh":999,"year":2014,"quarter":2},{"intervalAmountEmployees":"ANTAL_500_999","amountEmployeesLow":500,"amountEmployeesHigh":999,"year":2014,"quarter":1}]}],"participants":null},{"vat":48464114,"address":{"street":"Langelinie Alle","numberfrom":17,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":2100,"cityname":"København Ø","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"KØBENHAVN","mailbox":null},"companyform":{"code":230,"description":"STA","longdescription":"Statslig administrativ enhed"},"companystatus":{"text":"OPHØRT"},"contact":{"email":"ebst@ebst.dk","www":null,"phone":35466000,"fax":35466001},"industrycode":{"code":841300,"text":"Administration af og bidrag til erhvervsfremme"},"life":{"start":"1974-04-01","end":"2013-09-30","name":"Erhvervsstyrelsen (EBST)","adprotected":false},"secondarynames":[],"accounting":{"start":null,"end":null,"revision":null,"documents":null,"tax":[{"year":2012,"tradeid":28866984,"managementvat":null,"companytype":"Enkeltstående selskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":12603031,"deficit":0,"paidtax":3150750,"tonnageorcarbon":null},{"year":2013,"tradeid":28866984,"managementvat":null,"companytype":"Enkeltstående selskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":13758005,"deficit":0,"paidtax":3439500,"tonnageorcarbon":null},{"year":2014,"tradeid":28866984,"managementvat":null,"companytype":"Enkeltstående selskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":13548433,"deficit":0,"paidtax":3319358,"tonnageorcarbon":null}]},"capital":{"capital":null,"currency":null},"industrycodes":[],"subsidiaries":[1008153570,1008646348],"employment":[{"quarter":[{"intervalAmountEmployees":"ANTAL_1_1","amountEmployeesLow":1,"amountEmployeesHigh":1,"year":2013,"quarter":1}]}],"participants":null}]',
		"[id='suggest-subsidiary-example']": '[{"subsidiarynumber":1003407806,"address":{"street":"Langelinie Allé","numberfrom":17,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":2100,"cityname":"København Ø","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"KØBENHAVN","mailbox":null},"contact":{"email":null,"phone":35291000,"fax":null},"industrycode":{"code":841300,"text":"Administration af og bidrag til erhvervsfremme"},"life":{"start":"1993-01-01","end":null,"name":"Erhvervsstyrelsen","adprotected":false},"industrycodes":[]},{"subsidiarynumber":1003407843,"address":{"street":"Langelinie Allé","numberfrom":17,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":2100,"cityname":"København Ø","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"KØBENHAVN","mailbox":null},"contact":{"email":"ebst@ebst.dk","phone":35466000,"fax":35466001},"industrycode":{"code":841300,"text":"Administration af og bidrag til erhvervsfremme"},"life":{"start":"1993-01-01","end":"2013-09-30","name":"Erhvervsstyrelsen (EBST)","adprotected":false},"industrycodes":[]}]',
		"[id='suggest-participant-example']": '[{"participantnumber":4000740169,"address":{"street":"Frederiksholms Kanal","numberfrom":27,"numberto":null,"letterfrom":"F","letterto":null,"floor":null,"door":null,"zipcode":1220,"cityname":"København K","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":null,"mailbox":null},"contact":{"email":null,"phone":null},"life":{"name":"Den Danske Stat v/transportministeren","profession":null},"roles":[{"vat":34704724,"address":{"street":"Søren Frichs Vej","numberfrom":38,"numberto":null,"letterfrom":"A","letterto":null,"floor":2,"door":null,"zipcode":8230,"cityname":"Åbyhøj","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"AARHUS","mailbox":null},"companystatus":{"text":"NORMAL"},"life":{"start":"2012-08-30","end":null,"name":"AARHUS LETBANE I/S","adprotected":false},"roles":[{"type":"founder","life":{"start":"2012-08-30","end":"2015-04-01","title":null}}]}]},{"participantnumber":4000790993,"address":{"street":"Frederiksholms Kanal","numberfrom":27,"numberto":null,"letterfrom":"F","letterto":null,"floor":null,"door":null,"zipcode":1220,"cityname":null,"altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":null,"mailbox":null},"contact":{"email":null,"phone":null},"life":{"name":"Den Danske Stat v/transportministeren","profession":null},"roles":[{"vat":36032499,"address":{"street":"Metrovej","numberfrom":5,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":2300,"cityname":"København S","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"KØBENHAVN","mailbox":null},"companystatus":{"text":"NORMAL"},"life":{"start":"2014-06-19","end":null,"name":"RING 3 LETBANE I/S","adprotected":false},"roles":[{"type":"founder","life":{"start":"2014-06-19","end":null,"title":null}}]}]}]',
		"[id='retrieve-changed-companies-example']": '[{"vat":10150817,"lastupdate":{"datetime":"2016-06-09T11:34:19.000+02:00","unix":1465464859}},{"vat":10150817,"lastupdate":{"datetime":"2016-06-09T11:31:09.000+02:00","unix":1465464669}},{"vat":10150817,"lastupdate":{"datetime":"2016-06-09T11:31:08.000+02:00","unix":1465464668}}]'
	};

	jQuery.each(responses, function(key, value)
	{
		jQuery(key + " pre code").html(JSON.stringify(JSON.parse(value), null, 3));
	});



	jQuery('code').each(function(i, block)
	{
		hljs.highlightBlock(block);
	});



	jQuery("[id='retrieve-company-example'] button").click(function()
	{
		jQuery.ajax
		({
			async: true,
			url: 'http://rest.cvrapi.dk/v1/dk/company/' + jQuery("[id='retrieve-company-example'] input").val(),
			success: function(b)
			{
				jQuery("[id='retrieve-company-example'] pre code").each(function(i, block)
				{
					jQuery(block).html(JSON.stringify(b, null, 3));
					hljs.highlightBlock(block);
				});
			}
		});
	});

	jQuery("[id='retrieve-subsidiary-example'] button").click(function()
	{
		jQuery.ajax
		({
			async: true,
			url: 'http://rest.cvrapi.dk/v1/dk/subsidiary/' + jQuery("[id='retrieve-subsidiary-example'] input").val(),
			success: function(b)
			{
				jQuery("[id='retrieve-subsidiary-example'] pre code").each(function(i, block)
				{
					jQuery(block).html(JSON.stringify(b, null, 3));
					hljs.highlightBlock(block);
				});
			}
		});
	});

	jQuery("[id='retrieve-participant-example'] button").click(function()
	{
		jQuery.ajax
		({
			async: true,
			url: 'http://rest.cvrapi.dk/v1/dk/participant/' + jQuery("[id='retrieve-participant-example'] input").val(),
			success: function(b)
			{
				jQuery("[id='retrieve-participant-example'] pre code").each(function(i, block)
				{
					jQuery(block).html(JSON.stringify(b, null, 3));
					hljs.highlightBlock(block);
				});
			}
		});
	});



	jQuery("[id='suggest-company-example'] button").click(function()
	{
		jQuery.ajax
		({
			async: true,
			url: 'http://rest.cvrapi.dk/v1/dk/suggestions/company/' + jQuery("[id='suggest-company-example'] input").val(),
			success: function(b)
			{
				console.log(b);
				jQuery("[id='suggest-company-example'] pre code").each(function(i, block)
				{
					jQuery(block).html(JSON.stringify(b, null, 3));
					hljs.highlightBlock(block);
				});
			}
		});
	});

	jQuery("[id='suggest-subsidiary-example'] button").click(function()
	{
		jQuery.ajax
		({
			async: true,
			url: 'http://rest.cvrapi.dk/v1/dk/suggestions/subsidiary/' + jQuery("[id='suggest-subsidiary-example'] input").val(),
			success: function(b)
			{
				console.log(b);
				jQuery("[id='suggest-subsidiary-example'] pre code").each(function(i, block)
				{
					jQuery(block).html(JSON.stringify(b, null, 3));
					hljs.highlightBlock(block);
				});
			}
		});
	});

	jQuery("[id='suggest-participant-example'] button").click(function()
	{
		jQuery.ajax
		({
			async: true,
			url: 'http://rest.cvrapi.dk/v1/dk/suggestions/participant/' + jQuery("[id='suggest-participant-example'] input").val(),
			success: function(b)
			{
				console.log(b);
				jQuery("[id='suggest-participant-example'] pre code").each(function(i, block)
				{
					jQuery(block).html(JSON.stringify(b, null, 3));
					hljs.highlightBlock(block);
				});
			}
		});
	});
});

(function($) {
	var element = $('.follow-scroll'), originalY = element.offset().top;

	// Space between element and top of screen (when scrolling)
	var topMargin = 20;

	// Should probably be set in CSS; but here just for emphasis
	element.css('position', 'relative');

	$(window).on('scroll', function(event)
	{
		var scrollTop = $(window).scrollTop();

		element.stop(false, false).animate
		({
			top: scrollTop < originalY ? 0 : scrollTop - originalY + topMargin
		}, 100);
	});
})(jQuery);

!function(e,a,t,n,c,o,s){e.GoogleAnalyticsObject=c,e[c]=e[c]||function(){(e[c].q=e[c].q||[]).push(arguments)},e[c].l=1*new Date,o=a.createElement(t),s=a.getElementsByTagName(t)[0],o.async=1,o.src=n,s.parentNode.insertBefore(o,s)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-70546307-1","auto"),ga("send","pageview");