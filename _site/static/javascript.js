jQuery(document).ready(function()
{
	var responses = {
		"[id='errormessages-example']": '{"error":"INTERNAL_ERROR","message":"An internal error has occurred. Please try again or reach out to inform about the error."}',
		"[id='retrieve-company-example']": '{"vat":10150817,"address":{"street":"Langelinie Allé","numberfrom":17,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":2100,"cityname":"København Ø","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"KØBENHAVN","mailbox":null},"companyform":{"code":230,"description":"STA","longdescription":"Statslig administrativ enhed"},"companystatus":{"text":"AKTIV"},"contact":{"email":null,"www":null,"phone":35291000,"fax":null},"industrycode":{"code":841300,"text":"Administration af og bidrag til erhvervsfremme"},"life":{"start":"1964-04-01","end":null,"name":"Erhvervsstyrelsen","adprotected":false},"secondarynames":[],"accounting":{"start":null,"end":null,"revision":null,"documents":null,"tax":[{"year":2012,"tradeid":28866984,"managementvat":null,"companytype":"Enkeltstående selskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":12603031,"deficit":0,"paidtax":3150750,"tonnageorcarbon":null},{"year":2013,"tradeid":28866984,"managementvat":null,"companytype":"Enkeltstående selskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":13758005,"deficit":0,"paidtax":3439500,"tonnageorcarbon":null},{"year":2014,"tradeid":28866984,"managementvat":null,"companytype":"Enkeltstående selskab","taxlaw":"Selskabsskatteloven § 1.1.1","taxableincome":13548433,"deficit":0,"paidtax":3319358,"tonnageorcarbon":null}]},"capital":{"capital":null,"currency":null},"industrycodes":[],"subsidiaries":[1017951463,1014085897],"employment":[{"quarter":[{"intervalAmountEmployees":"ANTAL_500_999","amountEmployeesLow":500,"amountEmployeesHigh":999,"year":2014,"quarter":3},{"intervalAmountEmployees":"ANTAL_500_999","amountEmployeesLow":500,"amountEmployeesHigh":999,"year":2014,"quarter":2},{"intervalAmountEmployees":"ANTAL_500_999","amountEmployeesLow":500,"amountEmployeesHigh":999,"year":2014,"quarter":1}]}],"participants":null}',
		"[id='retrieve-subsidiary-example']": '{"subsidiarynumber":1003407806,"address":{"street":"Langelinie Allé","numberfrom":17,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":2100,"cityname":"København Ø","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"KØBENHAVN","mailbox":null},"contact":{"email":null,"phone":35291000,"fax":null},"industrycode":{"code":841300,"text":"Administration af og bidrag til erhvervsfremme"},"life":{"start":"1993-01-01","end":null,"name":"Erhvervsstyrelsen","adprotected":false},"industrycodes":[]}',
		"[id='retrieve-participant-example']": '{"participantnumber":4004213460,"address":{"street":"Tietgensgade","numberfrom":37,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":1550,"cityname":"København V","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":null,"mailbox":null},"contact":{"email":null,"phone":null},"life":{"name":"DEN DANSKE STAT v/General- direktoratet for P & T","profession":null},"roles":[{"vat":14773908,"address":{"street":"Teglholmsgade","numberfrom":1,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":2450,"cityname":"København SV","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"KØBENHAVN","mailbox":null},"companystatus":{"text":"NORMAL"},"life":{"start":"1990-11-14","end":null,"name":"TDC A/S","adprotected":false},"roles":[{"type":"founder","life":{"start":"1990-11-14","end":null,"title":"DEN DANSKE STAT v/General- direktoratet for P & T Tietgensgade 37, 1550 København V"}}]},{"vat":14653031,"address":{"street":"Telehøjen","numberfrom":1,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":5220,"cityname":"Odense SØ","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"ODENSE","mailbox":null},"companystatus":{"text":"OPLØST EFTER FUSION"},"life":{"start":"1990-11-19","end":"1995-08-16","name":"FYNS TELEFON A/S","adprotected":false},"roles":[{"type":"founder","life":{"start":"1990-11-19","end":"1995-08-16","title":"DEN DANSKE STAT v/General- direktoratet for P & T Tietgensgade 37, 1550 København V"}}]},{"vat":14669337,"address":{"street":"Telegade","numberfrom":2,"numberto":null,"letterfrom":null,"letterto":null,"floor":null,"door":null,"zipcode":2630,"cityname":"Taastrup","altcityname":null,"countrycode":"DK","coname":null,"freetext":null,"muniname":"HØJE TAASTRUP","mailbox":null},"companystatus":{"text":"OPLØST EFTER FUSION"},"life":{"start":"1990-11-12","end":"1995-08-25","name":"TELECOM A/S","adprotected":false},"roles":[{"type":"founder","life":{"start":"1990-11-12","end":"1995-08-25","title":"DEN DANSKE STAT v/General- direktoratet for P & T Tietgensgade 37, 1550 København V"}}]}]}',
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