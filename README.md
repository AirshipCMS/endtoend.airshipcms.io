# End to End Site

On Prod before doing prod--> alpha snapshot, make sure pages, collections, and product collections are good to go.

Notes:
On e2e alpha,
- KEEP signin, cart, nav, and checkout modules from ALPHA
- GET other layouts, templates, styles from PROD E2E REPO
- CLEAN out templates that aren't needed
- LAUNCH to alpha
- TEST
- Put good changes on prod e2e (prep for next weekend launch)

## Example Page

|Item|Title/Name|Type|Value|Expectation|
|--|--|--|--|--|
|Title|||`Example Page`|
|Permalink|||`example-page`|
Template||Page Template|`example-page.html`|
|Field|Header|Text|`Example Page Header`|This text renders as the page title within the body content and also should also be rendered in the page `<title>` property.|
|Field|Description|Textarea|`This page contains several relateds to test the durability of related fields.`|This literally displays the description: "This page contains several relateds to test the durability of related fields."|
|Field|Related Collection|Related to `Example Collection`|Set Related Items: `A`, `B`, `C`|Only `A` renders|
|Field|Related Collection 2|Related to `Example Collection`|Set Related Items: `AA`, `BB`, `CC`|Only `AA` renders. Setting a separate set of items to test that the proper relateds render in this set, even though it pulls from the same collection.|
|Field|Related Product Collection|Related to `Example Product Collection`|Set Related Items: `A`, `B`, `C`|Only `A` renders|
|Field|Related Product Collection 2|Related to `Example Product Collection`|Set Related Items: `AA`, `BB`, `CC`|Only `AA` renders. Setting a separate set of items to test that the proper relateds render in this set, even though it pulls from the same collection.|
|Field|Related Subscription Collection|Related to `Example Subscription Collection`|Set Related Items: `A`, `B`, `C`|Only `A` renders|
|Field|Related Subscription Collection 2|Related to `Example Subscription Collection`|Set Related Items: `AA`, `BB`, `CC`|Only `AA` renders. Setting a separate set of items to test that the proper relateds render in this set, even though it pulls from the same collection.|

## Example Page 2

|Item|Title/Name|Type|Value|Expectation|
|--|--|--|--|--|
|Title|||`Example Page 2`|
|Permalink|||`example-page-2`|
Template||Page Template|`example-page.html`|
|Field|Header|Text|`Example Page 2`|This text renders as the page title within the body content and also should also be rendered in the page `<title>` property.|
|Field|Description|Textarea|`This page contains EMPTY several relateds to test that rendering does not break when there is missing data. This page also exists to show that the same page template can be used by multiple pages that have the same field types.`|This literally displays the description: "This page contains EMPTY several relateds to test that rendering does not break when there is missing data. This page also exists to show that the same page template can be used by multiple pages that have the same field types."|
|Field|Related Collection|Related to `Example Collection`|Set No Items.|Page renders, though no related items show.|
|Field|Related Collection 2|Related to `Example Collection`|Set No Items.|Page renders, though no related items show.|
|Field|Related Product Collection|Related to `Example Product Collection`|Set No Items.|Page renders, though no related items show.|
|Field|Related Product Collection 2|Related to `Example Product Collection`|Set No Items.|Page renders, though no related items show.|
|Field|Related Subscription Collection|Related to `Example Subscription Collection`|Set No Items.|Page renders, though no related items show.|
|Field|Related Subscription Collection 2|Related to `Example Subscription Collection`|Set No Items.|Page renders, though no related items show.|

## Example Collection

### Collection Setup
|Item|Title/Name|Type|Value|Expectation|
|--|--|--|--|--|
|Title|||`Example Collection`|
|Public Path|||`example-collection`|
Template Directory|||`collection`|
|Show Permalink|||`true`|
|Has Categories|||`true`|
|Has Tags|||`true`|
|Items per page (is this what is it called?)|||`2`|Only 2 items render per page. When a third item is expected, the next button must be pressed to see it.|
|Field|Header|Text|_See specific items._|_See specific items._|
|Field|Description|Textarea|_See specific items._|_See specific items._|
|Field|Related Collection|Related to `Example Collection`|_See specific items._|_See specific items._|
|Field|Related Collection 2|Related to `Example Collection`|_See specific items._|_See specific items._|
|Field|Related Product Collection|Related to `Example Product Collection`|_See specific items._|_See specific items._|
|Field|Related Product Collection 2|Related to `Example Product Collection`|_See specific items._|_See specific items._|
|Field|Related Subscription Collection|Related to `Example Subscription Collection`|_See specific items._|_See specific items._|
|Field|Related Subscription Collection 2|Related to `Example Subscription Collection`|_See specific items._|_See specific items._|
|Primary Label|||`Header`|

Notes: Add Layout is 'layout.html'.

### Categories Setup
|Category Name|Permalink|Expectation|
|--|--|--|
|Cat 1|`cat1`|Items `A`, `B`, `C`, `AA`, `BB`, `CC`, `AAA`, `BBB`, and `CCC` have `Cat 1` set.|Items `A`, `AA`, and `AAA` render in the list view.|
|Cat 2|`cat2`|No items have `Cat 2` set. No items render in the list view for `Cat 2`.|

Notes: Add Just initial values and no relateds. 
After adding all collection items, product colletion items, and sub collection items **this should be the only manual part if working from prod snapshot*, then go back and connect all relateds.

### Item: `A Published Item`
|Field|Value|Expectation|
|--|--|--|
|Header|`A Published Item`|
|Publish Date|Any Past Date|This item should render.|
|Categories|`Cat 1`|
|Tags|`Tag 1`,`Tag$`,`Tag-A`,`Tag_A`|Test rendering of: spaces in tags, capitalization, weird characters.|
|Permalink|`a`|Relative links to items should be reusable accross different sections because permalinks can be duplicated in different collections|
|Description|`This is item <b>A Published Item</b>, containing related items A Published Item, B Drafted Item, and C Unpublished Item. Only A Published Item should render.`|This literally displays the description: "This is post **A Published Item**, containing related items A Published Item, B Drafted Item, and C Unpublished Item. Only A Published Item should render."|
|Related Collection|Set Related Items: `A`, `B`, `C`|Only `A` renders|
|Related Collection 2|Set Related Items: `AA`, `BB`, `CC`|Only `AA` renders. Setting a separate set of items to test that the proper relateds render in this set, even though it pulls from the same collection.|
|Related Product Collection|Set Related Items: `A`, `B`, `C`|Only `A` renders|
|Related Product Collection 2|Set Related Items: `AA`, `BB`, `CC`|Only `AA` renders. Setting a separate set of items to test that the proper relateds render in this set, even though it pulls from the same collection.|
|Related Subscription Collection|Set Related Items: `A`, `B`, `C`|Only `A` renders|
|Related Subscription Collection 2|Set Related Items: `AA`, `BB`, `CC`|Only `AA` renders. Setting a separate set of items to test that the proper relateds render in this set, even though it pulls from the same collection.|

Note: Tag "Tag_A" is not possible. Did "Tag+A"

### Item: `B Drafted Item`
This item has the same values except for the following:

|Field|Value|Expectation|
|--|--|--|
|Header|`B Drafted Item`|
|Publish Date|_Set as a draft._|This item should not render on lists. It's direct permalink view should render.|
|Permalink|`b`|
|Description|`This is item <b>B Drafted Item</b>, containing related items A Published Item, B Drafted Item, and C Unpublished Item. This page should not render in "each" lists, though going directly to the item slug should render.`|This literally displays the description: "This is item <b>B Drafted Item</b>, containing related items A Published Item, B Drafted Item, and C Unpublished Item. This page should not render in "each" lists, though going directly to the item slug should render."|

### Item: `C Future Date Item`
This item has the same values except for the following:

|Field|Value|Expectation|
|--|--|--|
|Header|`C Future Date Item`|
|Publish Date|_Set a date in the very far future._|This item should not render on lists. It's direct permalink view should render. (I think?)|
|Permalink|`c`|
|Description|`This is item <b>C Future Date Item</b>, containing related items A Published Item, B Drafted Item, and C Unpublished Item. This page should not render in "each" lists, though going directly to the item slug should render.`|This literally displays the description: "This is item <b>C Future Date Item</b>, containing related items A Published Item, B Drafted Item, and C Unpublished Item. This page should not render in "each" lists, though going directly to the item slug should render."|

### Item: "D No Content Item"
This item is published and has no other values set.

|Field|Value|Expectation|
|--|--|--|
|Header|_N/A_|No header value is set, so the page `<title>` property should render the default value `Airship CMS`
|Publish Date|Any Past Date|This item should render, with no content on the view. This tests that missing content is handled gracefully.|
|Permalink|`d`|

Notes: Admin requires a Header, since it is set as the primary label. Cannot set to no value.

### Item: `AA Published Item`
This item has the same values as `A Published Item`, except for the following:

|Field|Value|
|--|--|--|
|Header|`AA Published Item`|
|Permalink|`aa`|

Notes: and description is different.

### Item: `BB Drafted Item`
This item has the same values as `B Drafted Item`, except for the following:

|Field|Value|
|--|--|--|
|Header|`BB Published Item`|
|Permalink|`bb`|

Notes: and description is different.

### Item: `CC Future Date Item`
This item has the same values as `C Future Date Item`, except for the following:

|Field|Value|
|--|--|--|
|Header|`CC Future Date Item`|
|Permalink|`cc`|

Notes: and description is different.

### Item: "DD No Content Item"
This item has the same values as "D No Content Item", except for the following:

|Field|Value|
|--|--|--|
|Permalink|`dd`|

Notes: and description is different.

### Item: `AAA Published Item`
This item has the same values as `A Published Item`, except for the following:

|Field|Value|Expectation|
|--|--|--|
|Header|`AAA Published Item`|
|Permalink|`aaa`|
|Tags|`Tag 2`,`Tag+`,`Tag-B`,`Tag_B`,`'Tag with Single Quotes'`,`"Tag with Double Quotes"`|Tests tags that are different from other published posts.|

Notes: and description is different.

### Item: `BBB Drafted Item`
This item has the same values as `B Drafted Item`, except for the following:

|Field|Value|
|--|--|--|
|Header|`BBB Published Item`|
|Permalink|`bbb`|

Notes: and description is different.

### Item: `CCC Future Date Item`
This item has the same values as `CC Future Date Item`, except for the following:

|Field|Value|
|--|--|--|
|Header|`CCC Future Date Item`|
|Permalink|`ccc`|

Notes: and description is different.

### Item: "DDD No Content Item"
This item has the same values as "D No Content Item", except for the following:

|Field|Value|
|--|--|--|
|Permalink|`ddd`|

Notes: and description is different.

```
For each collection use the same naming conventions, switching out 'Item', 'Product', or 'Subscription Product'

Add Sub Rendering to Page and Collection Templates.

Need to more thoroughly test Category fields rendering.

Need to add conditionals to subnav for subscription items. ... probably if has_plans

Include links to hidden page D on example page.
Include links to cat2 in subnav?

Add pagination to list pages so that 2 items show per page. Fix template to be 2 col wide.

Future: rendering items accross different collections (and maybe pages?) that use the same tags?
```




------------------------- fixy notes ------

setup
set up all pages, except relateds
set up categories
set up all collections, except relateds, save

content
set up all pages, except relateds
set up all posts, except relateds
- edit: D cannot be null for header
set up all products, except relates
- products dont have header and description, they have product title abd product description
- products need example data. use 1.50 /1.00
- set A to regular, AA to sale, same for B, C and D
- inventory 10, 20, 0, Small Medium Large
- for relates set all posts ABCD, or AABBCCDD, d should not render?
set up relateds for pages and collections
set up relateds for posts
set up pages content
set up blank
  - cart.html
  - checkout.html
  - signin.html

setting a product to future shows it as active in admin list instead of scheduled
  - Scheduled and On Sale / On Sale
  - Inactive and On Sale / Inactive 
cannot do underscores in tags
maybe template dir/template setter should be more intuitive
maybe items are published by default
example page
- include D in related pages set
- was using 'layout.html' instead of 'application.html'. change default layout to application.html.
harcode site name in partial layout


----

More notes, add PRODUCT text to description for products.


Change Description for all products. Simpler.

A:
This is item contains all related items: A-D, AA-DD, and AAA-DDD. Only A and D items should render.

Regular / On Sale / Regular

Weight:
1oz / 1lb / 1lb 1oz

B:
This is item contains all related items: A-D, AA-DD, and AAA-DDD. Only A and D items should render.

This page should not render in "each" lists, though going directly to the item slug should render.

C:
This is item contains all related items: A-D, AA-DD, and AAA-DDD. Only A and D items should render.

This page should not render in "each" lists, though going directly to the item slug should render.

ADMIN UX Improvement
Add spinner after pressing create / save in admin.

API Improvement
Should future published items not render, if attached as a related item? Right now, they render.

//////

A,B,C - relateds for all

D - no relateds

AA,BB,CC,AAA,BBB,CCC - NO relateds

//////

probably need spa routes? or rewrites for e2e cart/checkout