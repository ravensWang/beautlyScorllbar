# beautlyScorllbar
可以美化一下IE和FireFox 丑的不行的滚动条，带给你页面一个美观漂亮的滚动条。
依赖jQuery和jquery.mousewheel 
可在css中自由设置滚动条的颜色及滚动条可滑动区域的颜色。


使用方法：
HTML:
<pre>
&lt;div id="A" style="height:300px;width:200px;"&gt;
  &lt;div class="Main"&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
    &lt;p&gt;测试测试 &lt;/p&gt;
  &lt;/div>
&lt;/div>
</pre>
script:
<pre>
$("#A").scrollbar({w:10});
</pre>
//参数只有一个 w:滚动条期望的宽度;
