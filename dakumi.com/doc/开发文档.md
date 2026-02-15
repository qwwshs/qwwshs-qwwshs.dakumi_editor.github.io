# 开发文档

* 谱面

::: tip

v0.5.0 以前的谱面后缀为d3 内部格式为lua table的格式 v0.5.0 以后的谱面后缀为json

:::

## 谱面基本格式：

````lua
        {

        bpm_list = { --bpm列表 bpm_list中至少有一个bpm

        {beat = {0,0,1},bpm = 120},

        },

        note = {}, --note

        event = {}, --event

        tarck = {}, --轨道属性

        effect = {}, --整体影响 可以做些特效

        offset = 0 , --偏移值

        info = {  --谱面基本信息

        song_name = [[]], --歌曲名

        chart_name = [[]], --谱面名

        chartor = [[]], --谱师

        artist = [[]], --曲师

        }
        }
```` 

### 细则：

*  beat的3个数值分别为beat的整数部分 分数分子 分数分母 大小为beat[1] + beat[2] / beat[3]

## note结构：

````lua
        {
        track=5, --所在轨道
        beat={6,4,4}, --note的beat
        beat2={6,4,4}, --仅在type为hold时有用 为hold尾部beat
        type='hold', --有三种 note wipe hold
        fake=0,  --为1时为假note
        note_head=0, --0.5.0更新 仅在type为hold时有用 为1时hold头自带note
        wipe_head=0 --0.5.0更新 仅在type为hold时有用 为1时hold头自带wipe
        }
````

## event结构：

### 0.5.0之后：

````lua
        beat = { 0, 0, 1 }, --event头部的beat
        beat2 = { 0, 0, 1 }, --event尾部的beat
        track = 1, --所在轨道
        type = 'x', --类型有x w x为轨道中心所在坐标 w为轨道宽度（该event所在track的模式为lrpos时 x读取为轨道左边界 w读取为轨道右边界）
        from = 1, --event起始值
        to = 1, --event终点值
        trans = { --过渡
            trans = {0,0,1,1}, --过渡类型为bezier时读取 为bezier坐标点
            type = 'bezier', --过渡类型 有bezier与easings
            easings = 1 --过渡类型为easings时读取 easings为标准easings表
        },
````

### 0.5.0之前：

````lua
        {
        track=3, --所在轨道
        beat={4,1,1,}, --event头部的beat
        beat2={5,1,4,}, --event尾部的beat
        trans={0,0,1,1,}, --bezier的坐标点 只能为三阶bezier曲线
        from=100, --event起始值 --版本小于等于0.2.0的为form（打错字了）
        type='x', --类型有x w x为轨道中心所在坐标 w为轨道宽度
        to=0, --event终点值
        }
````

## track结构：

````lua
        {
        name = '', --轨道别名
        w0thenShow = 0, --当w0thenShow=1时在轨道宽度为0时不会隐藏
        type = 'xw' --轨道模式，有xw（常规）与lrpos（将x读取为轨道左边界 w读取为轨道右边界）模式
        }
````