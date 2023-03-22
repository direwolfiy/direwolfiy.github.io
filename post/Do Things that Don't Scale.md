---
title: Do Things that Don't Scale
description: 文章翻译
date: 2023-03-22
tags:
    - startup
    - openai
---

>原文链接：[http://paulgraham.com/ds.html](http://paulgraham.com/ds.html)
# 做一些不可扩展的事情

July 2013  
  
One of the most common types of advice we give at Y Combinator is to do things that don't scale. A lot of would-be founders believe that startups either take off or don't. You build something, make it available, and if you've made a better mousetrap, people beat a path to your door as promised. Or they don't, in which case the market must not exist. [[1](http://paulgraham.com/ds.html#f1n)]  
在 Y Combinator，我们经常给出的一种建议是做一些不可扩展的事情。很多想要创业的人认为，创业公司要么起飞，要么失败。你建立一个东西，使其可用，如果你制造了更好的老鼠夹，人们就会按照承诺前来。或者他们不来，那么市场可能不存在。 [1]

Actually startups take off because the founders make them take off. There may be a handful that just grew by themselves, but usually it takes some sort of push to get them going. A good metaphor would be the cranks that car engines had before they got electric starters. Once the engine was going, it would keep going, but there was a separate and laborious process to get it going.  
实际上，创业公司之所以起飞，是因为创始人推动它们起飞。可能有一些创业公司自行成长，但通常需要某种推动才能让它们起飞。一个好的比喻是汽车发动机在拥有电动起动器之前的曲柄。一旦发动机启动，它就会一直运转，但是需要单独而费力的过程来启动它。
  
**Recruit**  
  
The most common unscalable thing founders have to do at the start is to recruit users manually. Nearly all startups have to. You can't wait for users to come to you. You have to go out and get them.  
创始人们在创业初期必须做的最常见的一件无法扩展的事情，就是手动招募用户。几乎所有的创业公司都必须这样做。你不能等待用户来到你这里。你必须走出去招揽他们。

Stripe is one of the most successful startups we've funded, and the problem they solved was an urgent one. If anyone could have sat back and waited for users, it was Stripe. But in fact they're famous within YC for aggressive early user acquisition.  
Stripe是我们资助的最成功的创业公司之一，他们解决的问题是紧迫的。如果有人可以坐等用户的到来，那就是Stripe。但事实上，他们以积极的早期用户获取而在YC内部闻名。

Startups building things for other startups have a big pool of potential users in the other companies we've funded, and none took better advantage of it than Stripe. At YC we use the term "Collison installation" for the technique they invented. More diffident founders ask "Will you try our beta?" and if the answer is yes, they say "Great, we'll send you a link." But the Collison brothers weren't going to wait. When anyone agreed to try Stripe they'd say "Right then, give me your laptop" and set them up on the spot.  
为其他创业公司构建产品的创业公司，在我们资助的其他公司中有着庞大的潜在用户群，而在这方面，没有人比Stripe更善于利用。在YC，我们使用“Collison安装”这个术语来形容他们发明的技巧。更加内向的创始人会问：“你能试用我们的测试版吗？”，如果答案是肯定的，他们会说：“太好了，我们会发送给你一个链接。”但Collison兄弟不会等待。当任何人同意试用Stripe时，他们会说：“那好，把你的笔记本电脑给我”，然后当场为他们安装。

There are two reasons founders resist going out and recruiting users individually. One is a combination of shyness and laziness. They'd rather sit at home writing code than go out and talk to a bunch of strangers and probably be rejected by most of them. But for a startup to succeed, at least one founder (usually the CEO) will have to spend a lot of time on sales and marketing. [[2](http://paulgraham.com/ds.html#f2n)]  
创始人之所以不愿意出去逐个招募用户，有两个原因。其一是羞怯和懒惰的结合体。他们宁愿坐在家里写代码，也不愿意出门与一群陌生人交谈，可能被大多数人拒绝。但是，为了使创业公司成功，至少有一个创始人（通常是CEO）需要花费大量时间进行销售和营销。
  
The other reason founders ignore this path is that the absolute numbers seem so small at first. This can't be how the big, famous startups got started, they think. The mistake they make is to underestimate the power of compound growth. We encourage every startup to measure their progress by weekly [growth rate](http://paulgraham.com/growth.html). If you have 100 users, you need to get 10 more next week to grow 10% a week. And while 110 may not seem much better than 100, if you keep growing at 10% a week you'll be surprised how big the numbers get. After a year you'll have 14,000 users, and after 2 years you'll have 2 million.  
创始人忽视这种方法的另一个原因是，一开始的绝对数字似乎太小了。他们认为这不可能是大型著名创业公司的起步方式。他们犯的错误是低估了复合增长的力量。我们鼓励每个创业公司通过每周的[增长率](http://paulgraham.com/growth.html)来衡量其进展。如果你有100个用户，下周需要再获得10个用户，才能实现每周10%的增长。虽然110个用户似乎比100个用户好不了多少，但如果你保持每周10%的增长率，你会惊讶于数字的增长速度。一年后你会拥有14,000个用户，两年后你会拥有2百万个用户。

You'll be doing different things when you're acquiring users a thousand at a time, and growth has to slow down eventually. But if the market exists you can usually start by recruiting users manually and then gradually switch to less manual methods. [[3](http://paulgraham.com/ds.html#f3n)]  
当你一次招募1000个用户时，你会做不同的事情，而增长最终必须放缓。但是，如果市场存在，你通常可以开始手动招募用户，然后逐渐转向更少的手动方法。
  
Airbnb is a classic example of this technique. Marketplaces are so hard to get rolling that you should expect to take heroic measures at first. In Airbnb's case, these consisted of going door to door in New York, recruiting new users and helping existing ones improve their listings. When I remember the Airbnbs during YC, I picture them with rolly bags, because when they showed up for tuesday dinners they'd always just flown back from somewhere.  
Airbnb是这种技巧的经典例子。市场很难启动，所以你应该首先采取英勇的措施。在Airbnb的情况下，这些措施包括在纽约挨家挨户地招募新用户，并帮助现有用户改善他们的房源列表。当我回忆起Airbnb在YC期间的情景时，我会想到他们拖着旅行箱，因为当他们出现在周二的晚餐中时，他们总是刚从某个地方飞回来。

**Fragile**  
  
Airbnb now seems like an unstoppable juggernaut, but early on it was so fragile that about 30 days of going out and engaging in person with users made the difference between success and failure.  
现在的Airbnb似乎是一个不可阻挡的巨头，但早期它是如此脆弱，以至于出去与用户亲身接触的30天时间，决定了成功与失败之间的差别。
  
That initial fragility was not a unique feature of Airbnb. Almost all startups are fragile initially. And that's one of the biggest things inexperienced founders and investors (and reporters and know-it-alls on forums) get wrong about them. They unconsciously judge larval startups by the standards of established ones. They're like someone looking at a newborn baby and concluding "there's no way this tiny creature could ever accomplish anything."  
这种初始的脆弱性并不是Airbnb的一个独特特征。几乎所有的创业公司最初都是脆弱的。这是经验不足的创始人、投资者（以及论坛上的记者和自以为是的专家）经常犯的最大错误之一。他们下意识地用已经成立的公司的标准来评判初创公司。这就像是有人看着一个新生儿，然后下结论说“这个微小的生物绝对不可能取得任何成就。”
  
It's harmless if reporters and know-it-alls dismiss your startup. They always get things wrong. It's even ok if investors dismiss your startup; they'll change their minds when they see growth. The big danger is that you'll dismiss your startup yourself. I've seen it happen. I often have to encourage founders who don't see the full potential of what they're building. Even Bill Gates made that mistake. He returned to Harvard for the fall semester after starting Microsoft. He didn't stay long, but he wouldn't have returned at all if he'd realized Microsoft was going to be even a fraction of the size it turned out to be. 
如果记者和自以为是的专家不认可你的创业公司，那么这是无害的。他们总是搞错事情。即使投资者不认可你的创业公司，当他们看到增长时，他们会改变主意。最大的危险是你会自己否定你的创业公司。我见过这种情况。我经常要鼓励那些没有看到他们正在建立的东西的全部潜力的创始人。甚至比尔·盖茨也犯过这个错误。他在创立微软后回到哈佛上秋季学期。他没有呆太久，但如果他意识到微软会成为它最终成为的规模的零头，他根本不会回到哈佛。
  
The question to ask about an early stage startup is not "is this company taking over the world?" but "how big could this company get if the founders did the right things?" And the right things often seem both laborious and inconsequential at the time. Microsoft can't have seemed very impressive when it was just a couple guys in Albuquerque writing Basic interpreters for a market of a few thousand hobbyists (as they were then called), but in retrospect that was the optimal path to dominating microcomputer software. And I know Brian Chesky and Joe Gebbia didn't feel like they were en route to the big time as they were taking "professional" photos of their first hosts' apartments. They were just trying to survive. But in retrospect that too was the optimal path to dominating a big market.  
对于一个早期创业公司，应该问的问题不是“这家公司是否要掌控全球市场？”而是“如果创始人做了正确的事情，这家公司会有多大？”而在当时，这些正确的事情往往看起来既费力又微不足道。当微软只是一群在阿尔伯克基写Basic解释器，为几千个业余爱好者（当时称为“爱好者”）市场服务的人时，它肯定不会给人留下深刻的印象，但回顾过去，这是主宰微型计算机软件市场的最佳路径。我知道布莱恩·切斯基和乔·格比亚在为他们的第一个房东拍“专业”照片时，没有感觉到他们正在走向成功之路。他们只是在努力生存。但回顾过去，这也是主宰一个大市场的最佳路径。

How do you find users to recruit manually? If you build something to solve [your own problems](http://paulgraham.com/startupideas.html), then you only have to find your peers, which is usually straightforward. Otherwise you'll have to make a more deliberate effort to locate the most promising vein of users. The usual way to do that is to get some initial set of users by doing a comparatively untargeted launch, and then to observe which kind seem most enthusiastic, and seek out more like them. For example, Ben Silbermann noticed that a lot of the earliest Pinterest users were interested in design, so he went to a conference of design bloggers to recruit users, and that worked well. [[5](http://paulgraham.com/ds.html#f5n)]  
如何找到要手动招募的用户？如果你建立的东西是为了解决[你自己的问题](http://paulgraham.com/startupideas.html)，那么你只需要找到你的同行，这通常是直截了当的。否则，你需要更有意识地努力去寻找最有前途的用户群。通常的方法是通过进行相对不具有针对性的发布来获取一些最初的用户，然后观察哪种类型的用户似乎最为热情，然后寻找更多类似的用户。例如，本·西尔伯曼注意到最早的Pinterest用户中有很多对设计感兴趣，所以他去参加了一个设计博客的会议，以招募用户，这个方法很成功。

**Delight**  
  
You should take extraordinary measures not just to acquire users, but also to make them happy. For as long as they could (which turned out to be surprisingly long), Wufoo sent each new user a hand-written thank you note. Your first users should feel that signing up with you was one of the best choices they ever made. And you in turn should be racking your brains to think of new ways to delight them.  
你不仅应该采取非凡的措施来获取用户，还应该让他们感到满意。Wufoo曾经给每个新用户发一封手写感谢信，直到他们无法再保持这种做法（这个时间长度出人意料）。你的第一批用户应该感到，选择加入你的公司是他们曾经做过的最好的决定之一。反过来，你应该竭尽全力想出新的方法来让他们感到愉悦。

Why do we have to teach startups this? Why is it counterintuitive for founders? Three reasons, I think.  
为什么我们要教创业公司这个道理？为什么创始人觉得这是违反直觉的？我认为有三个原因。

One is that a lot of startup founders are trained as engineers, and customer service is not part of the training of engineers. You're supposed to build things that are robust and elegant, not be slavishly attentive to individual users like some kind of salesperson. Ironically, part of the reason engineering is traditionally averse to handholding is that its traditions date from a time when engineers were less powerful — when they were only in charge of their narrow domain of building things, rather than running the whole show. You can be ornery when you're Scotty, but not when you're Kirk. 
首先，很多创始人都受过工程师的训练，而客户服务并不是工程师的培训内容。你应该建造坚固而优美的东西，而不是像某种销售人员一样奴隶般地关注个别用户。具有讽刺意味的是，工程师传统上不喜欢手把手地指导，部分原因是因为它的传统来自于一个时期，那时工程师的权力较小——他们只负责自己的狭窄领域的建造，而不是整个公司的运营。你可以在托尼身上发脾气，但不能在柯克身上发脾气。
  
Another reason founders don't focus enough on individual customers is that they worry it won't scale. But when founders of larval startups worry about this, I point out that in their current state they have nothing to lose. Maybe if they go out of their way to make existing users super happy, they'll one day have too many to do so much for. That would be a great problem to have. See if you can make it happen. And incidentally, when it does, you'll find that delighting customers scales better than you expected. Partly because you can usually find ways to make anything scale more than you would have predicted, and partly because delighting customers will by then have permeated your culture.  
创始人们没有足够关注个别客户的另一个原因是他们担心这样做不能扩展。但是当初创企业的创始人们担心这一点时，我会指出在他们当前的状态下没有什么可以失去的。也许如果他们尽一切可能让现有用户感到非常满意，他们有一天会有太多的用户，需要做的事情太多。那将是一个很棒的问题。看看你能否实现它。顺便说一句，当它发生时，你会发现让客户高兴比你预期的要更具扩展性。部分原因是因为通常可以找到比预期更好的方法来扩展，部分原因是因为让客户高兴将在那时渗透到您的文化中。

I have never once seen a startup lured down a blind alley by trying too hard to make their initial users happy.  
我从未见过一家初创企业因为过分努力使初始用户满意而陷入死胡同。

But perhaps the biggest thing preventing founders from realizing how attentive they could be to their users is that they've never experienced such attention themselves. Their standards for customer service have been set by the companies they've been customers of, which are mostly big ones. Tim Cook doesn't send you a hand-written note after you buy a laptop. He can't. But you can. That's one advantage of being small: you can provide a level of service no big company can. [[6](http://paulgraham.com/ds.html#f6n)]  
但也许最大的阻碍创始人意识到他们可以对用户更加关注的事情是，他们从未经历过这样的关注。他们对客户服务的标准是由他们曾经是客户的那些公司设定的，这些公司大多是大公司。蒂姆·库克不会在你购买笔记本电脑后给你写一封手写便条。他做不到。但你可以。这是小公司的一个优势：你可以提供大公司无法提供的服务水平。

Once you realize that existing conventions are not the upper bound on user experience, it's interesting in a very pleasant way to think about how far you could go to delight your users.  
一旦你意识到现有的惯例不是用户体验的上限，那么想着如何尽可能让用户感到愉悦会变得非常有趣和愉悦。

**Experience**  

I was trying to think of a phrase to convey how extreme your attention to users should be, and I realized Steve Jobs had already done it: insanely great. Steve wasn't just using "insanely" as a synonym for "very." He meant it more literally — that one should focus on quality of execution to a degree that in everyday life would be considered pathological.  
我试图想出一个词语来表达你对用户的极端关注度应该有多高，然后我意识到史蒂夫·乔布斯已经说过了：疯狂地伟大。史蒂夫不仅仅是用“疯狂”来代替“非常”的意思。他更字面意义上的意思是，应该专注于执行质量，以一个在日常生活中会被认为是病态的程度。

All the most successful startups we've funded have, and that probably doesn't surprise would-be founders. What novice founders don't get is what insanely great translates to in a larval startup. When Steve Jobs started using that phrase, Apple was already an established company. He meant the Mac (and its documentation and even packaging — such is the nature of obsession) should be insanely well designed and manufactured. That's not hard for engineers to grasp. It's just a more extreme version of designing a robust and elegant product.  
我们资助过的所有最成功的初创企业都做到了这一点，这可能不会让潜在的创始人感到惊讶。新手创始人不明白的是，什么是“疯狂地伟大”在一个初创企业中的含义。当史蒂夫·乔布斯开始使用这个短语时，苹果公司已经是一家成熟的公司了。他的意思是Mac电脑（以及它的文档甚至包装——这就是痴迷的本质）应该被设计和制造得疯狂地好。对于工程师来说，这并不难理解。这只是一个更极端的版本，设计一个坚固而优雅的产品。

What founders have a hard time grasping (and Steve himself might have had a hard time grasping) is what insanely great morphs into as you roll the time slider back to the first couple months of a startup's life. It's not the product that should be insanely great, but the experience of being your user. The product is just one component of that. For a big company it's necessarily the dominant one. But you can and should give users an insanely great experience with an early, incomplete, buggy product, if you make up the difference with attentiveness.  
创始人们很难理解的是（甚至史蒂夫自己也可能很难理解），当你将时间滑块滚回到初创企业生命的前几个月时，“疯狂伟大”会变成什么。这不是产品应该疯狂地伟大，而是成为你的用户的经历应该疯狂地伟大。产品只是其中的一个组成部分。对于大公司来说，产品必然是占主导地位的。但是，如果你通过关注度来弥补差距，你可以并且应该给用户一个早期、不完整、有缺陷的产品，但是却具有疯狂伟大的体验。
  
Can, perhaps, but should? Yes. Over-engaging with early users is not just a permissible technique for getting growth rolling. For most successful startups it's a necessary part of the feedback loop that makes the product good. Making a better mousetrap is not an atomic operation. Even if you start the way most successful startups have, by building something you yourself need, the first thing you build is never quite right. And except in domains with big penalties for making mistakes, it's often better not to aim for perfection initially. In software, especially, it usually works best to get something in front of users as soon as it has a quantum of utility, and then see what they do with it. Perfectionism is often an excuse for procrastination, and in any case your initial model of users is always inaccurate, even if you're one of them. [[7](http://paulgraham.com/ds.html#f7n)]  
可以吗？也许可以，但应该吗？是的。对于大多数成功的初创企业来说，与早期用户过度互动不仅是获取增长的许可技术，而且是使产品变得更好的反馈循环的必要组成部分。制作更好的老鼠夹不是一个原子操作。即使你像大多数成功的初创企业一样开始，通过构建自己需要的东西，你所构建的第一件事永远不会完全正确。除了在因犯错而受到严厉惩罚的领域外，在最初不要追求完美往往更好。特别是在软件领域，通常最好在产品具有一定效用后尽快将其呈现给用户，然后看看他们如何使用它。完美主义常常是拖延症的借口，而且无论如何，即使你是其中之一，你对用户的最初模型也总是不准确的。

The feedback you get from engaging directly with your earliest users will be the best you ever get. When you're so big you have to resort to focus groups, you'll wish you could go over to your users' homes and offices and watch them use your stuff like you did when there were only a handful of them.  
与最早期的用户直接互动获取的反馈是你从未获得过的最好的反馈。当你如此之大，不得不依靠焦点小组时，你会希望你能够像在只有少数几个用户的时候那样去用户的家和办公室观察他们使用你的东西。

**Fire**  
  
Sometimes the right unscalable trick is to focus on a deliberately narrow market. It's like keeping a fire contained at first to get it really hot before adding more logs.  
有时，正确的不可扩展技巧是专注于一个故意狭窄的市场。这就像首先将火控制在一个小范围内，让它变得非常热，然后再添加更多的木柴。

That's what Facebook did. At first it was just for Harvard students. In that form it only had a potential market of a few thousand people, but because they felt it was really for them, a critical mass of them signed up. After Facebook stopped being for Harvard students, it remained for students at specific colleges for quite a while. When I interviewed Mark Zuckerberg at Startup School, he said that while it was a lot of work creating course lists for each school, doing that made students feel the site was their natural home.  
这就是Facebook所做的。起初，它只是为哈佛大学的学生服务。在那种形式下，它只有几千人的潜在市场，但因为他们觉得它真的是为他们而设的，他们中的临界质量注册了。在Facebook不再仅仅为哈佛大学的学生提供服务后，它在特定学院的学生中仍然保持了一段时间。当我在Startup School采访马克·扎克伯格时，他说虽然为每所学校创建课程列表很费力，但这样做让学生感到这个网站是他们的自然之家。

Any startup that could be described as a marketplace usually has to start in a subset of the market, but this can work for other startups as well. It's always worth asking if there's a subset of the market in which you can get a critical mass of users quickly. [[8](http://paulgraham.com/ds.html#f8n)]  
任何可以被描述为市场的初创企业通常都必须从市场的子集开始，但这对其他初创企业也适用。值得问的是，是否有一个市场的子集，在其中你可以快速获得足够的用户数量。

Most startups that use the contained fire strategy do it unconsciously. They build something for themselves and their friends, who happen to be the early adopters, and only realize later that they could offer it to a broader market. The strategy works just as well if you do it unconsciously. The biggest danger of not being consciously aware of this pattern is for those who naively discard part of it. E.g. if you don't build something for yourself and your friends, or even if you do, but you come from the corporate world and your friends are not early adopters, you'll no longer have a perfect initial market handed to you on a platter.  
大多数使用“封闭火焰”策略的初创公司是不自觉的。他们为自己和朋友构建了一些东西，他们恰巧是早期采用者，并且后来才意识到他们可以将其提供给更广泛的市场。 如果您不自觉地使用此策略，它同样有效。不自觉意识到这种模式的最大危险是那些天真地抛弃其中一部分的人。例如，如果您没有为自己和朋友构建任何东西，甚至如果您这样做了，但您来自公司世界，您的朋友不是早期采用者，那么您将不再拥有完美的初始市场。

Among companies, the best early adopters are usually other startups. They're more open to new things both by nature and because, having just been started, they haven't made all their choices yet. Plus when they succeed they grow fast, and you with them. It was one of many unforeseen advantages of the YC model (and specifically of making YC big) that B2B startups now have an instant market of hundreds of other startups ready at hand.  
在公司中，最好的早期采用者通常是其他初创公司。它们天生更加开放于新事物，而且由于它们刚刚开始，它们还没有做出所有选择。此外，当它们成功时，它们会快速增长，您也会随之成长。这是YC模式（特别是让YC变得庞大）的许多意想不到的优势之一，B2B初创公司现在拥有了即时的市场，其中包括数百个其他初创公司。

**Meraki**  
  
For [hardware startups](http://paulgraham.com/hw.html) there's a variant of doing things that don't scale that we call "pulling a Meraki." Although we didn't fund Meraki, the founders were Robert Morris's grad students, so we know their history. They got started by doing something that really doesn't scale: assembling their routers themselves.  
对于硬件初创公司来说，有一种不规模化的做事方式，我们称之为“拉梅拉奇（pulling a Meraki）”。尽管我们没有资助Meraki，但创始人是罗伯特·莫里斯（Robert Morris）的研究生，所以我们知道他们的历史。他们开始的方式确实不可规模化：自己组装路由器。

Hardware startups face an obstacle that software startups don't. The minimum order for a factory production run is usually several hundred thousand dollars. Which can put you in a catch-22: without a product you can't generate the growth you need to raise the money to manufacture your product. Back when hardware startups had to rely on investors for money, you had to be pretty convincing to overcome this. The arrival of crowdfunding (or more precisely, preorders) has helped a lot. But even so I'd advise startups to pull a Meraki initially if they can. That's what Pebble did. The Pebbles [assembled](https://sep.yimg.com/ty/cdn/paulgraham/eric.jpg?t=1619606886&) the first several hundred watches themselves. If they hadn't gone through that phase, they probably wouldn't have sold $10 million worth of watches when they did go on Kickstarter.  
硬件初创公司面临着软件初创公司所不会遇到的障碍。工厂生产运行的最小订单通常为几十万美元。这可能会让您陷入两难境地：没有产品，您就无法产生所需的增长，以筹集生产产品所需的资金。早期，硬件初创公司必须依赖投资者的资金，因此必须非常有说服力才能克服这个问题。众筹（更精确地说是预购）的到来已经帮了很多忙。但即便如此，我建议初创公司如果可以的话，最好最初先采用“拉梅拉奇”的方式。这就是Pebble做的。Pebble最初自己组装了前几百只手表。如果他们没有经历这个阶段，当他们在Kick starter上推出手表时，他们可能不会卖出价值1000万美元的手表。

Like paying excessive attention to early customers, fabricating things yourself turns out to be valuable for hardware startups. You can tweak the design faster when you're the factory, and you learn things you'd never have known otherwise. Eric Migicovsky of Pebble said one of the things he learned was "how valuable it was to source good screws." Who knew?  
就像过度关注早期客户一样，对于硬件初创公司来说，自己制造东西也非常有价值。当您是工厂时，可以更快地调整设计，同时您会学到一些您从未知道的东西。 Pebble的Eric Migicovsky说他学到的其中一件事是“寻找好螺丝是多么有价值”。谁知道呢？

**Consult**  

Sometimes we advise founders of B2B startups to take over-engagement to an extreme, and to pick a single user and act as if they were consultants building something just for that one user. The initial user serves as the form for your mold; keep tweaking till you fit their needs perfectly, and you'll usually find you've made something other users want too. Even if there aren't many of them, there are probably adjacent territories that have more. As long as you can find just one user who really needs something and can act on that need, you've got a toehold in making something people want, and that's as much as any startup needs initially. [[9](http://paulgraham.com/ds.html#f9n)]  
有时，我们建议B2B初创公司的创始人将过度参与推向极端，并选择一个单一用户，表现得好像他们是为这一个用户构建咨询服务。初始用户为您的模具提供形式；不断调整，直到完全符合他们的需求，您通常会发现您已经制作出其他用户也想要的东西。即使它们不多，也可能有更多的相邻领域。只要您能找到一个真正需要某些东西并能行动的用户，您就有了一个立足点，制作出人们想要的东西，这就是任何初创公司最初所需的。
  
Consulting is the canonical example of work that doesn't scale. But (like other ways of bestowing one's favors liberally) it's safe to do it so long as you're not being paid to. That's where companies cross the line. So long as you're a product company that's merely being extra attentive to a customer, they're very grateful even if you don't solve all their problems. But when they start paying you specifically for that attentiveness — when they start paying you by the hour — they expect you to do everything.  
咨询是不规模化工作的典型例子。但是（就像其他宽厚待人的方式一样），只要您没有被支付，那么这样做是安全的。这就是公司跨越界限的地方。只要您是一个产品公司，只是对客户格外关注，即使您没有解决他们所有的问题，他们也会非常感激。但是当他们开始特别为您的关注而支付您的费用，当他们按小时支付您的费用时，他们就希望您能做所有事情。

Another consulting-like technique for recruiting initially lukewarm users is to use your software yourselves on their behalf. We did that at Viaweb. When we approached merchants asking if they wanted to use our software to make online stores, some said no, but they'd let us make one for them. Since we would do anything to get users, we did. We felt pretty lame at the time. Instead of organizing big strategic e-commerce partnerships, we were trying to sell luggage and pens and men's shirts. But in retrospect it was exactly the right thing to do, because it taught us how it would feel to merchants to use our software. Sometimes the feedback loop was near instantaneous: in the middle of building some merchant's site I'd find I needed a feature we didn't have, so I'd spend a couple hours implementing it and then resume building the site.  
招募最初不太热情的用户的另一种类似咨询的技术是代表他们使用您的软件。我们在Viaweb就是这样做的。当我们向商家提供使用我们的软件制作在线商店时，有些人说不，但他们会让我们为他们制作一个。由于我们会竭尽所能地获得用户，因此我们就这样做了。当时我们感到非常糟糕。我们没有组织大型战略性的电子商务合作，而是试图销售行李、钢笔和男式衬衫。但是回想起来，这正是正确的做法，因为它让我们知道商家使用我们的软件的感受。有时反馈循环几乎是瞬时的：在制作某个商家的网站时，我发现需要一个我们没有的功能，于是我会花几个小时实现它，然后继续制作网站。

**Manual**  

There's a more extreme variant where you don't just use your software, but are your software. When you only have a small number of users, you can sometimes get away with doing by hand things that you plan to automate later. This lets you launch faster, and when you do finally automate yourself out of the loop, you'll know exactly what to build because you'll have muscle memory from doing it yourself.  
还有一种更极端的变体，您不仅使用您的软件，而是成为您的软件。当您只有少量用户时，有时可以手动完成计划后要自动化的任务。这使您可以更快地启动，并且当您最终自动化时，您将知道要构建什么，因为您将有从自己的经验中获得的肌肉记忆。

When manual components look to the user like software, this technique starts to have aspects of a practical joke. For example, the way Stripe delivered "instant" merchant accounts to its first users was that the founders manually signed them up for traditional merchant accounts behind the scenes.  
当手动组件看起来像软件时，这种技术开始具有实用玩笑的方面。例如，Stripe向其第一批用户提供“即时”商家账户的方式是，创始人在幕后手动为他们签署传统的商家账户。
  
Some startups could be entirely manual at first. If you can find someone with a problem that needs solving and you can solve it manually, go ahead and do that for as long as you can, and then gradually automate the bottlenecks. It would be a little frightening to be solving users' problems in a way that wasn't yet automatic, but less frightening than the far more common case of having something automatic that doesn't yet solve anyone's problems.  
有些初创公司最初可能完全是手动的。如果您可以找到有问题需要解决的人，并且您可以手动解决它，请尽可能这样做，然后逐渐自动化瓶颈。以一种尚未自动化的方式解决用户的问题可能有些令人恐惧，但比起那些尚未解决任何人问题的自动化情况，它要少得多。
  
**Big**  
  
I should mention one sort of initial tactic that usually doesn't work: the Big Launch. I occasionally meet founders who seem to believe startups are projectiles rather than powered aircraft, and that they'll make it big if and only if they're launched with sufficient initial velocity. They want to launch simultaneously in 8 different publications, with embargoes. And on a tuesday, of course, since they read somewhere that's the optimum day to launch something.  
我应该提到一种通常行不通的初始策略：大规模发布。我偶尔会遇到一些创始人，他们似乎相信初创公司是弹丸而不是动力飞机，只有在具有足够的初始速度的情况下才能取得成功。他们想要同时在8个不同的出版物上发布，并设置禁令。当然，他们要在星期二发布，因为他们在某个地方读到星期二是发布某些东西的最佳日子。

It's easy to see how little launches matter. Think of some successful startups. How many of their launches do you remember? All you need from a launch is some initial core of users. How well you're doing a few months later will depend more on how happy you made those users than how many there were of them. 
很容易看出发布对于初创公司的重要性有多少。想想一些成功的初创公司。您记得他们的多少次发布吗？您从发布中所需的只是一些最初的核心用户。您几个月后的表现，更多地取决于您如何让这些用户满意，而不是他们的数量有多少。

So why do founders think launches matter? A combination of solipsism and laziness. They think what they're building is so great that everyone who hears about it will immediately sign up. Plus it would be so much less work if you could get users merely by broadcasting your existence, rather than recruiting them one at a time. But even if what you're building really is great, getting users will always be a gradual process — partly because great things are usually also novel, but mainly because users have other things to think about.  
那么为什么创始人认为发布很重要呢？这是孤注一掷和懒惰的结合体。他们认为他们正在构建的东西非常出色，每个听说它的人都会立即注册。此外，如果您只需通过广播您的存在即可获得用户，而不是一个一个地招募他们，那么这将会是更少的工作。但是，即使您正在构建的东西真的很出色，获得用户始终是一个逐渐的过程——部分原因是因为伟大的事情通常也是新颖的，但主要是因为用户还有其他事情可考虑。
  
Partnerships too usually don't work. They don't work for startups in general, but they especially don't work as a way to get growth started. It's a common mistake among inexperienced founders to believe that a partnership with a big company will be their big break. Six months later they're all saying the same thing: that was way more work than we expected, and we ended up getting practically nothing out of it. [[11](http://paulgraham.com/ds.html#f11n)]  
合作关系通常也不起作用。对于创业公司来说，它们通常不起作用，但作为启动增长的方式尤其不起作用。对于经验不足的创始人来说，与大公司建立合作关系将是他们的重大突破是一个常见的错误。六个月后，他们都会说同样的话：那比我们预期的要艰难得多，我们最终几乎什么都没得到。
  
It's not enough just to do something extraordinary initially. You have to make an extraordinary _effort_ initially. Any strategy that omits the effort — whether it's expecting a big launch to get you users, or a big partner — is ipso facto suspect.  
仅仅做一些非凡的事情是不够的。你必须要在一开始就做出非凡的努力。任何忽略了这种努力的策略——无论是期望通过大规模发布来吸引用户，还是通过大型合作伙伴来实现——都是值得怀疑的。

**Vector**  
  
The need to do something unscalably laborious to get started is so nearly universal that it might be a good idea to stop thinking of startup ideas as scalars. Instead we should try thinking of them as pairs of what you're going to build, plus the unscalable thing(s) you're going to do initially to get the company going.  
为了开始，需要做一些不可扩展的费力工作，这几乎是普遍存在的需求，以至于停止将创业想法视为标量可能是个好主意。相反，我们应该尝试将其视为一对：你要构建的东西以及你要开始运营公司所要做的不可扩展的事情。  

It could be interesting to start viewing startup ideas this way, because now that there are two components you can try to be imaginative about the second as well as the first. But in most cases the second component will be what it usually is — recruit users manually and give them an overwhelmingly good experience — and the main benefit of treating startups as vectors will be to remind founders they need to work hard in two dimensions. [[12](http://paulgraham.com/ds.html#f12n)]  
以这种方式看待创业想法可能会很有趣，因为现在有了两个组成部分，你可以尝试在第二个和第一个方面都富有想象力。但在大多数情况下，第二个组成部分将是通常的——手动招募用户并给他们极佳的体验——将创业视为向量的主要好处是提醒创始人他们需要在两个维度上努力工作。

In the best case, both components of the vector contribute to your company's DNA: the unscalable things you have to do to get started are not merely a necessary evil, but change the company permanently for the better. If you have to be aggressive about user acquisition when you're small, you'll probably still be aggressive when you're big. If you have to manufacture your own hardware, or use your software on users's behalf, you'll learn things you couldn't have learned otherwise. And most importantly, if you have to work hard to delight users when you only have a handful of them, you'll keep doing it when you have a lot.  
在最好的情况下，向量的两个组成部分都为公司的基因做出了贡献：启动时必须做的不可扩展的事情不仅仅是必要的恶，而且永久地改变了公司的发展方向。如果在公司还很小的时候就必须积极地进行用户获取，那么在公司变大后你很可能仍然会这样做。如果你必须制造自己的硬件，或者代表用户使用你的软件，你将学到你否则学不到的东西。最重要的是，如果你必须为少数用户提供出色的体验而努力工作，那么在你拥有大量用户时你仍将继续这样做。  
  
**Notes**  
  
[1] Actually Emerson never mentioned mousetraps specifically. He wrote "If a man has good corn or wood, or boards, or pigs, to sell, or can make better chairs or knives, crucibles or church organs, than anybody else, you will find a broad hard-beaten road to his house, though it be in the woods."  
事实上，爱默生从未特别提到老鼠夹。他写道：“如果一个人有好的谷物、木材、板材、猪肉出售，或者可以制作比任何人都好的椅子、刀具、坩埚或教堂管风琴，你会发现通向他的房子的道路广阔而崎岖，即使它在树林里。”
  
[2] Thanks to Sam Altman for suggesting I make this explicit. And no, you can't avoid doing sales by hiring someone to do it for you. You have to do sales yourself initially. Later you can hire a real salesperson to replace you.  
感谢Sam Altman提出将这点明确化的建议。不，你不能通过雇佣别人来代替你进行销售来避免这个问题。你必须在最初阶段亲自进行销售。后来你可以雇佣一个真正的销售人员来取代你。
  
[3] The reason this works is that as you get bigger, your size helps you grow. Patrick Collison wrote "At some point, there was a very noticeable change in how Stripe felt. It tipped from being this boulder we had to push to being a train car that in fact had its own momentum."  
这种方法之所以奏效，是因为随着公司的扩大，公司规模本身就会帮助你实现增长。帕特里克·柯利森写道：“在某个时刻，Stripe的感觉发生了非常显著的变化。它从我们必须推动的巨石变成了一辆火车车厢，实际上有了自己的动力。”
  
[4] One of the more subtle ways in which YC can help founders is by calibrating their ambitions, because we know exactly how a lot of successful startups looked when they were just getting started.  
YC帮助创始人的一个更微妙的方式是通过校准他们的志向，因为我们确切地知道很多成功的创业公司在刚开始时的模样。
  
[5] If you're building something for which you can't easily get a small set of users to observe — e.g. enterprise software — and in a domain where you have no connections, you'll have to rely on cold calls and introductions. But should you even be working on such an idea?  
如果你正在构建某个产品，无法轻松地获取少量用户进行观察——例如企业软件——并且在一个你没有任何关系的领域，你将不得不依靠冷呼叫和介绍。但你是否应该在这样的想法上工作呢？
  
[6] Garry Tan pointed out an interesting trap founders fall into in the beginning. They want so much to seem big that they imitate even the flaws of big companies, like indifference to individual users. This seems to them more "professional." Actually it's better to embrace the fact that you're small and use whatever advantages that brings.  
Garry Tan指出了创始人在开始时陷入的一个有趣陷阱。他们非常想要看起来很大，甚至模仿大公司的缺点，比如对个别用户的漠不关心。他们认为这更“专业”。实际上，更好的方法是接受你的公司是小型企业这一事实，并利用它带来的所有优势。

  
[7] Your user model almost couldn't be perfectly accurate, because users' needs often change in response to what you build for them. Build them a microcomputer, and suddenly they need to run spreadsheets on it, because the arrival of your new microcomputer causes someone to invent the spreadsheet.  
你的用户模型几乎不可能完全准确，因为用户的需求经常会因为你为他们所建造的东西而发生改变。如果你为他们构建了一台微型计算机，他们会突然需要在上面运行电子表格，因为你的新微型计算机的出现导致有人发明了电子表格。
  
[8] If you have to choose between the subset that will sign up quickest and those that will pay the most, it's usually best to pick the former, because those are probably the early adopters. They'll have a better influence on your product, and they won't make you expend as much effort on sales. And though they have less money, you don't need that much to maintain your target growth rate early on.  
如果你必须在注册最快的子集和付费最多的子集之间做出选择，通常最好选择前者，因为他们很可能是早期采用者。他们对你的产品有更好的影响力，你不需要在销售方面花费太多的精力。虽然他们没有那么多的钱，但你在早期实现目标增长率所需的资金并不多。

[9] Yes, I can imagine cases where you could end up making something that was really only useful for one user. But those are usually obvious, even to inexperienced founders. So if it's not obvious you'd be making something for a market of one, don't worry about that danger.  
是的，我可以想象有些情况下，你可能最终只为一个用户制作了一些东西。但这些情况通常是显而易见的，即使对于经验不足的创始人来说也是如此。因此，如果你不能肯定你只是在为一个用户市场制作产品，不必担心这种危险。
  
[10] There may even be an inverse correlation between launch magnitude and success. The only launches I remember are famous flops like the Segway and Google Wave. Wave is a particularly alarming example, because I think it was actually a great idea that was killed partly by its overdone launch.  
甚至可能存在启动规模和成功之间的反相关关系。我只记得一些臭名昭著的失败产品，比如Segway和Google Wave。Wave是一个特别令人担忧的例子，因为我认为它实际上是一个很好的想法，但却在过度的推出方面失败了。
  
[11] Google grew big on the back of Yahoo, but that wasn't a partnership. Yahoo was their customer.  
谷歌在雅虎的支持下迅速成长，但那并不是一种合作关系。雅虎是谷歌的客户。
  
[12] It will also remind founders that an idea where the second component is empty — an idea where there is nothing you can do to get going, e.g. because you have no way to find users to recruit manually — is probably a bad idea, at least for those founders.  
这还会提醒创始人，如果一个想法的第二个组成部分是空的——例如，因为你没有办法找到用户来手动招募——那么这个想法可能是个糟糕的想法，至少对于那些创始人来说是这样。
  
**Thanks** to Sam Altman, Paul Buchheit, Patrick Collison, Kevin Hale, Steven Levy, Jessica Livingston, Geoff Ralston, and Garry Tan for reading drafts of this.
感谢Sam Altman，Paul Buchheit，Patrick Collison，Kevin Hale，Steven Levy，Jessica Livingston，Geoff Ralston和Garry Tan阅读了这篇草稿。