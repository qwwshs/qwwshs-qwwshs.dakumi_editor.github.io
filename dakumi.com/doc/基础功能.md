---  
next:
  text: '说明文档'
  link: '/doc/documentlon'
---  

# 3. 基础功能

## note and event

+ note是音乐游戏里面最基础的概念 相信会下载dakumi并且使用的人肯定是知道的

+ event可以操控轨道的横坐标、宽度、等数值，以下称操控横坐标的event为x event，操作宽度的事件为w event

---

+ dakumi编辑界面在左侧共有三条轨道，从左到右分别是：note track、x track、w track

+ 如果要放置note/event 就在对应的轨道里按下对应的按键即可

::: tip

- 值得注意的是 dakumi对note类型的命名和本家并不相同

| dakumi | TAKUMI³ |
|----|----|
|note|Tap|
|hold|Hold|
|wipe|Slide|

:::

### note轨道

| 按键 | 音符 |
|----|----|
|q|note|
|w|wipe|
|e|hold 再按一次为hold尾|
|d|删除|

### x、w轨道

| 按键 | 音符 |
|----|----|
|e|x/w event 再按一次为event结束点|
|d|删除|

### note编辑

点击想要编辑的note 接下来侧边栏会出现这样的界面：

![note_edit](/public/note_edit1.png)

- 当note真假为```假```时 此时note为```假note```，左侧的play区域下落到判定线时不会进行判定，如果note类型是```hold```,则在接触到判定线那一刻消失

- 如果在note判定时note所处的track ```w```为0，则也判定为```假note```，但是，如果note类型是```hold```,如果在```hold```未结束时```w```不为0，此时```hold```会显示

### event编辑

点击想要编辑的event 接下来侧边栏会出现这样的界面：

![event_edit](/public/event_edit1.png)

::: tip

- 轨道属性和节拍起点，与节拍终点这三项属性不推荐在此页面进行编辑，最好的方法是删除该note然后再重新加一个，或者使用快捷键更改

::: 

| 属性 | 功能 |
|----|----|
|起始|event的起始值|
|终点|event的终点值|
|过渡类型|选择使用的缓动类型，目前有bezier与easings|

- dakumi默认的游玩轨道的起始点是0，终点是100

- ```过渡```的数值可以通过```bezier曲线```里面的上下键进行选择 也可以通过调整下面图像的两个坐标点进行调整

- ```赋予```是给一些情况用的：例如在前一条event编辑完成后所用的bezier曲线是第4个，但现在要编辑的轨道bezier曲线与第四个不同，但现在要赋予第4个bezier

- bezier曲线可以通过更改dakumi根目录下的```default_bezier.txt```来实现，内部语法遵循lua table的语法

## 编辑工具

- 在编辑界面的上方有编辑工具，分别为：

| 属性 | 功能 | 快捷键 |
|----|----|----|
|note真假|选择在放置note时默认的note真假| |
|hold头|选择放置hold时是否自带头（wipe或note）| |
|保存|保存当前谱面，__请等到保存结束后再退出谱面__|```ctrl + s```|
|播放/暂停|播放、暂停歌曲|```space```|
|播放速度|调整播放速度| |
|栅栏|调整栅栏数目，一般在使用快捷键时会用到栅栏| |
|轨道|调整当前轨道|```left、right```|
|轨道缩放|调整纵向缩放| |
|节拍分度|调节当前节拍分度|```up、down```|

## 谱面保存

按下```ctrl + s```或者是点击左上角的保存按钮会保存谱面，或者关闭应用时选择保存

__到此 你已经学会```dakumi```中最基本的功能__