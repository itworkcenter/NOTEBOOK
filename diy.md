```
// GALLERY BROWSER
function setgallery(data) {
    var $gallery = jQuery("#GalleryBrowser").html(""),
        template = function (src) {
            var temp = '<figure itemprop="associatedMedia" itemscope="" itemtype="http://www.newegg.com"><a href="' +
                src + '" itemprop="contentUrl"><img src="' + src +
                '" itemprop="thumbnail" alt="Image description"></a></figure>';

            return temp;
        },
        galleryImageStr = "";

    if (data && data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            galleryImageStr += template(data[i]);
        }
        $gallery.html(galleryImageStr);


    }

    var $gallery = jQuery("#GalleryBrowser");
}
// GET CASE DATA BY DATASOURCE
function getCaseData(itemNum) {
    var data = caseDatas;

    if (data && data.length > 0) {
        for (var i = 0; i < data.length; i++) {
            if (itemNum == data[i].itemNum) {
                return data[i];
            }
        }
    }
    return "";
}
// FACEBOOK VALUE SETTING
function facebookSetting(data) {
    jQuery("#fb-url").attr("content", "www.newegg.com");
    jQuery("#fb-title").attr("content", data.title);
    jQuery("#fb-description").attr("content", data.notable);
    jQuery("#fb-image").attr("content", data.images[0]);
    // jQuery("#tw-text").attr("href","javascript:window.open('https://twitter.com/intent/tweet"+ data.notable +"', 'name', 'width=800,height=500;');");
}
// LOAD SPECIFIC
function loadSpcific(datas) {
    var $DiyDetailAmd = $("#DiyDetailAmd"),
        $DiyDetailIntel = $("#DiyDetailIntel"),
        trStr = "",
        trTempl = function (name, data) {
            return '<tr>' +
                '<td>' +
                '<div class="diy-field">' +
                '<div class="diy-field-name">' + name + '</div>' +
                '<div class="diy-field-value">' + data[0] + '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="diy-field">' +
                '<div class="diy-field-name">' + name + '</div>' +
                '<div class="diy-field-value">' + data[1] + '</div>' +
                '</div>' +
                '</td>' +
                '<td>' +
                '<div class="diy-field">' +
                '<div class="diy-field-name">' + name + '</div>' +
                '<div class="diy-field-value">' + data[2] + '</div>' +
                '</div>' +
                '</td>' +
                '</tr>';
        };
    if (datas) {
        var intel = datas.intel,
            amd = datas.amd;

        for (var i in amd) {
            if (i != "summary" && i != "feature") {
                trStr += trTempl(i, amd[i]);
            }
        }
        $DiyDetailAmd.html(trStr);
        trStr = "";

        for (var i in intel) {
            if (i != "summary" && i != "feature") {
                trStr += trTempl(i, intel[i]);
            }
        }
        $DiyDetailIntel.html(trStr);
    }

}

loadSpcific(sets);

// UPDATE DETAIL
function updateDetail(data) {
    // SET SUMMARY VALUE
    document.getElementById("CaseTitle").innerHTML = data.title;
    document.getElementById("Dimension").innerHTML = data.dimensions;
    document.getElementById("Notable").innerHTML = data.notable;

    // SET IMAGE RETATE
    if (!window.Image3D) {
        data.autoPlay = true;
        window.Image3D = new ImageRetate("D3", data);
    } else {
        window.Image3D.options.images = data.images;
        window.Image3D.init();
    }
}
// SET CHOOSE
function setChoose(id) {
    var $selected = jQuery(".diy-choose-option[data-id='" + id + "']"),
        data = getCaseData(id);

    if ($selected.size() && !$selected.hasClass("selected")) {
        jQuery(".diy-choose-option.selected").removeClass("selected");
        $selected.addClass("selected");
    }

    updateDetail(data);
    facebookSetting(data);
    setgallery(data.gallery);
}

// LOAD CASE OPTIONS
function loadChooseOptions(data) {
    function id(id) {
        return document.getElementById(id);
    };

    function chooseOptionTmpl(data) {
        return '<div class="diy-choose-option diy-sqr ' + (data.index == 0 ? 'selected' : '') + '" data-id="' + data.index +
            '"><button type="button" class="btn-selected btn btn-mini btn-tertiary">Selected</button><button type="button" class="btn-select btn btn-mini btn-tertiary">Select</button><div class="diy-sqr-inner"><div class="diy-choose-state"><i class="fa fa-check-circle"></i></div><img src="' +
            data.images + '" alt="Case"></div></div>';
    }

    var $chooseOptionParent = id("DiyChooseOptions"),
        optionStrs = "";

    if (data) {
        for (var i = 0; i < data.length; i++) {
            var curr = data[i];

            optionStrs += chooseOptionTmpl({
                index: curr.itemNum,
                images: curr.images[0]
            });
        }
        $chooseOptionParent.innerHTML = optionStrs;
    }
    // SET SELECT
    var hrefData = getHrefData(),
        defaultCaseId = caseDatas[0].itemNum;

    if (hrefData.success) {
        setChoose(hrefData.id);
        if(hrefData.step == "two"){
            setHrefMark(hrefData.step, window.caseSelectId);
        }else{
            setHrefMark('one', "");
        }
        
    } else {
        setChoose(defaultCaseId);
        setHrefMark('one', "");
    }
    window.caseSelectId = defaultCaseId;

    // SELECT OPTION
    jQuery(document).on("click", ".diy-choose-option", function () {
        window.caseSelectId = jQuery(this).data("id");
        setChoose(window.caseSelectId);
    })
}

// ENTRANCE LOAD CHOOSE OPTOINS
loadChooseOptions(caseDatas);

// STEP CONTROL------------------------------------------
// MARK STEP
function setHrefStepMark(mark) {
    var hash = location.hash,
        reg = /#(two|one)/ig;

    if (!reg.test(hash)) {
        hash = mark;
    } else {
        hash = hash.replace(reg, mark);
    }

    location.hash = hash;
}

// MARK ID
function setHrefIdMark(id) {
    var hash = location.hash,
        reg = /\|id=.+\|/ig,
        paras = "|id=" + id + "|";

    if(id){
        if (!/\?/ig.test(hash)) {
            hash += "?"
        }
    
        if (!reg.test(hash)) {
            hash += paras;
        } else {
            hash = hash.replace(reg, paras);
        }
    }
    location.hash = hash;
}
// MARK HREF
function setHrefMark(step, id) {
    setHrefStepMark(step);
    setHrefIdMark(id);
}

function getHrefData() {
    var hash = location.hash,
        regId = /\|id=(.+)\|/ig,
        regStep = /#(two|one)/ig,
        results = {
            success: false
        };
    if (regId.test(hash)) {
        hash.match(regId);
        results.id = RegExp.$1;
    }

    if (regStep.test(hash)) {
        hash.match(regStep);
        results.step = RegExp.$1;
    }

    if (results.step && results.id) {
        results.success = true;
    }

    console.log(results)

    return results;
}
// GOTO TWO STEP
function gotoTwo() {
        
    // var caseSelectId = getHrefData().id;
    // window.caseSelectId = caseSelectId;
    setHrefMark("two", caseSelectId);

    jQuery(".diy-step.active").removeClass("active");
    jQuery(".diy-step.three").addClass("active");

    function importDetailData(data) {
        var img = data.images[0];
        jQuery("#CaseDetailSelect img").attr("src", img);
        jQuery(".diy-switch-detail .case .diy-field-value").html(data.title);
    }
    setHrefStepMark("two");
    setHrefIdMark(window.caseSelectId);
    importDetailData(getCaseData(window.caseSelectId));
    clearSwitch();

    getItems(window.caseSelectId, function (
        data) {
        exportItems(data, caseDatas);
    });
}
// GOTO ONE STEP
function gotoOne() {
    jQuery(".diy-step.active").removeClass("active");
    jQuery(".diy-step.two").addClass("active");
    setHrefStepMark("one");
    setHrefIdMark("");
}
jQuery("#StepTwoSubmit").click(function () {
    gotoTwo();
})
// STEP THREE CASE SELECT
jQuery("#CaseDetailSelect").click(function () {
    gotoOne();
})

// SET PRICE AND OTHER VALUE
function setValue(data, sets) {
    var $ = jQuery,
        $details = jQuery(".diy-switch-detail"),
        formatPrice = function (priceStr) {
            var prices = priceStr.match(/[\d+,]+/ig);
            return '<span class="price-current-label"></span>$<strong>' + (prices[0] || "") + '</strong><sup>.' + (prices[1] ||
                    "") +
                '</sup>&nbsp;';
        },
        formatCell = function () {
            return
        };

    var $price = $(".price-current", $details),
        $cpu = $(".cpu .diy-field-value", $details),
        $memory = $(".memory .diy-field-value", $details),
        $hd = $(".hd .diy-field-value", $details),
        $addCart = $(".diy-detail-action > .diy-add-cart", $details),
        $content = $(".diy-detail-content-body", $details),
        $contentKeys = $(".diy-detail-keys", $details),
        $action = $(".diy-detail-action", $details);


    function show(i, data, sets) {
        function convertToKey(keys) {
            return "<li>" + keys.join("</li><li>") + "</li>";
        }

        var d = data[i],
            s = sets,
            j = i > 2 ? (i - 3) : i,
            amdIntel = i > 2 ? "intel" : "amd",
            summary = "",
            feature = "";

        $($price.eq(i)).html(formatPrice(d.price));
        $($addCart.eq(i)).attr({
            "data-id": d.id,
            "data-bundleItems": d.bundleItems
        });

        $($content.eq(i)).html(s[amdIntel].summary[j]);
        $($contentKeys.eq(i)).html(convertToKey(s[amdIntel].feature[j]));

        if (d.stock) {
            $($action.eq(i)).removeClass("outStock");
        } else {
            $($action.eq(i)).addClass("outStock");
        }
    }

    if (data) {
        //intel
        for (var i = 0; i <= 5; i++) {
            show(i, data, sets);
        }
    }

}
// ENTRANCE DATA EXPORT
function exportItems(items, localdata) {
    function sortData(data) {
        function priceToNum(price) {
            price = price.replace(",", "");
            return price * 1;
        }
        data.sort(function (a, b) {
            var a = priceToNum(a.price);
            var b = b ? priceToNum(b.price) : "";
            return a - b;
        });
        return data;
    }

    function getLocalData(itemNum, data) {
        for (var i = 0; i < data.length; i++) {
            var curr = data[i];
            if (curr.itemNum == itemNum) {
                return curr.bundleItems;
            }
        }
    }

    function getValue(obj) {
        return {
            info: obj.displayInfo(),
            value: obj.displayRawValue()
        }
    }

    var one = [],
        two = [],
        count = 0,
        localBundleData = getLocalData(window.caseSelectId, caseDatas);

    for (var i in items) {

        var curr = items[i],
            itemNew = {
                id: i,
                price: curr.finalPrice.displayRawValue().replace("$", ""),
                stock: curr.stock.displayRawValue() * 1,
                num: curr.itemNumber.displayRawValue(),
                bundleItems: localBundleData[i]
            };

        if (count < 3) {
            one.push(itemNew);
        } else {
            two.push(itemNew);
        }

        count++;
    }
    one = sortData(one);
    two = sortData(two);

    setValue(two.concat(one), sets);
}
// GET ONLINE PRICE
function getItems(itemIdsStr, back) {
    if (!itemIdsStr) {
        return;
    }

    var JS = {
        load: function (id, url, back) {
            var d = document,
                s = "script",
                o = d.getElementById(id),
                h = d.getElementsByTagName("head")[0],
                n = d.createElement(s),
                loaded;

            if (o) {
                // CLEAR BEFORE
                o.parentElement.removeChild(o);
            }

            n.src = url;
            n.id = id;

            if (back) {
                n.onreadystatechange = n.onload = function () {
                    if (!loaded) {
                        back();
                    }
                    loaded = true;
                };
            }
            h.appendChild(n);
        }
    };
    // CLEAR OLD PRODUCTS
    window.Product = {};
    window.ng_list = "";
    window.ng_list = itemIdsStr.split(",");

    var itemsTarget = "//www.newegg.com/Common/ProductForLandingPage5.aspx?ItemList=" + window.ng_list.join(",") +
        "&Action=jQuery";
    var soldOutTarget = "//promotions.newegg.com/scripts/adjustStock-soldout-0.2.js";

    JS.load("ProductSctipt", itemsTarget, function () {
        JS.load("SoldoutScript", soldOutTarget, function () {
            back && back(window.Product);
        });
    });
};
// STEP CONTROL
function stepControl(e) {
    var hash = location.hash;
    var step = getHrefData().step;

    console.log(step)


    if (step) {
        if (step == "two") {
            gotoTwo();
        } else if (step == "one") {
            gotoOne();
        }
    }
}
// HISTORY CONTROL
function historyControl() {
    var hash = location.hash;
    var hrefData = getHrefData();
    var HistoryStep = {
        0: function () {
            location.href = "index.html";
        },
        1: gotoOne,
        2: gotoTwo
    }
}

// ADD TO CART
jQuery(document).on("click", ".diy-detail-action > .diy-add-cart", function () {
    var bundleItems = jQuery(this).data("bundleitems");

    location.href = "https://secure.newegg.com/Shopping/AddToCart.aspx?Submit=Add&BOMItemList=" + bundleItems +
        "%7C1&ItemList=&EWTList=&ItemProhibited=&OptionItemList=&PreItemList=&SubscriptionItemList=&Original=";
})

// STEP CONTROL && HISTORY BACK
stepControl();

window.onpopstate = function (e) {
    stepControl();
}

//SHARE EVENT
jQuery(document)
    .on("click", ".diy-share", function () {
        jQuery(this).toggleClass("hover");
    })
    .on("tap", ".diy-share", function () {
        jQuery(this).toggleClass("hover");
    })
    .on("mouseover", ".diy-share", function () {
        jQuery(this).addClass("hover");
    })
    .on("mouseout", ".diy-share", function () {
        jQuery(this).removeClass("hover");
    });


// PHOTOSWIPE
var initPhotoSwipeFromDOM = function (gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements 
    // (children of gallerySelector)
    var parseThumbnailElements = function (el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes 
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            // size = linkEl.getAttribute('data-size').split('x');
            //auto get width and height;
            size = [linkEl.children[0].width * 10,linkEl.children[0].height * 10];

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function (el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }

        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)
    var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
            params = {};

        if (hash.length < 5) {
            return params;
        }

        var vars = hash.split('&');
        for (var i = 0; i < vars.length; i++) {
            if (!vars[i]) {
                continue;
            }
            var pair = vars[i].split('=');
            if (pair.length < 2) {
                continue;
            }
            params[pair[0]] = pair[1];
        }

        if (params.gid) {
            params.gid = parseInt(params.gid, 10);
        }

        return params;
    };

    var openPhotoSwipe = function (index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {

            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function (index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            }

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used 
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }

    // Parse URL and open gallery if it contains #&pid=3&gid=1
    var hashData = photoswipeParseHash();
    if (hashData.pid && hashData.gid) {
        openPhotoSwipe(hashData.pid, galleryElements[hashData.gid - 1], true, true);
    }
};

// execute above function
initPhotoSwipeFromDOM('.gallerys');



// MAIL SUBSCRIBE
jQuery('#EmailSubmit').click(function (e) {
    // Validate Email
    var $input = jQuery("#EmailInput"),
        email = $input.val(),
        $mailerror = jQuery("<div id='EmailError' style='padding: 3px;color:red; '></div>").appendTo($input.closest(".subscribe-area")),
        filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,9})(\]?)$/,
        error = ["This field is required.", "Please check your email."];


    if (!(email == "")) {
        if (filter.test(email)) {
            // Enable btnSubmit Button
            jQuery.post("https://secure.m.newegg.com/newsletters", {
                "Email": email
            });
        } else {
            $input.html(error[1]);
            return false;
        }
    } else {
        $mailerror.html(error[0]);
        return false;
    }
});
```
