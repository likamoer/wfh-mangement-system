<template>
    <div class="table-box">
        <div class="filtrate commom-card flex-item-center">
            <span class="lebel">商品搜索：</span>
            <el-input
                placeholder="输入订单编号/商品编号..."
                v-model="searchOrder"
                prefix-icon="el-icon-search">
            </el-input>
            <span class="lebel">时间查找：</span>
            <el-date-picker
                v-model="time"
                type="daterange"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
            </el-date-picker>
            <span class="lebel">评价筛选：</span>
            <el-select v-model="selectKey" @change='selectChange' placeholder="请选择">
                <el-option
                v-for="(item, index) in options"
                :key="index"
                :label="item.label"
                :value="item.value">
                </el-option>
            </el-select>
            <el-button type="danger" size="small" plain>搜索</el-button>
        </div>
        <el-table
            ref="multipleTable"
            stripe
            align='center'
            :data="data"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            prop="user_id"
            align='center'
            label="评价"
            width="50">
                <span class="iconfont pingjia-icon" :class="evaluate[0].class"></span>
            </el-table-column>
            <el-table-column
            prop="nickname"
            label="商品编号"
            align='center'
            width="100">
            </el-table-column>
            <el-table-column
            prop='add_time'
            label="商品名称"
            align='center'
            min-width="100">
            </el-table-column>
            <el-table-column
            prop='gender'
            align='center'
            label="内容"
            width="100">
            </el-table-column>
            <el-table-column
            prop='province'
            align='center'
            label="图片"
            width="150">
                <div class="img-list">
                    <img :src="homeIcon">
                    <img :src="homeIcon">
                </div>
            </el-table-column>
            <el-table-column
            prop='progress'
            align='center'
            label="状态">
            </el-table-column>
            <el-table-column
            prop='level'
            align='center'
            label="评价人"
            width="150">
            </el-table-column>
            <el-table-column
            prop='ydh'
            align='center'
            label="订单编号"
            width="150">
            </el-table-column>
            <el-table-column
            prop='balance'
            label="评价时间"
            align='center'
            width="100">
            </el-table-column>
            <el-table-column align='center' label="操作" width="100">
                <template slot-scope="scope">
                   <div @click='receivingHandle(scope.row)' class="con-icon">
                        <el-button type="danger" size="mini" plain>回复</el-button>
                        <!-- <span>已回复</span> -->
                    </div>
                    <!-- <div @click='refundHandle(scope.row)' class="con-icon">
                        显示
                    </div>
                    |
                    <div @click='refundHandle(scope.row)' class="con-icon">
                        隐藏
                    </div> -->
                </template>
            </el-table-column>
            <el-table-column
                type="expand">
                <template slot-scope="scope">
                    <div class="text-input">
                        <el-input type="textarea" v-model="reply" rows="4" placeholder="回复" @change="textareaChange"/>
                        <div class="btn-wrap">
                            <el-button type="danger" size="mini">确认</el-button>
                            <el-button size="mini" plain>取消</el-button>
                        </div>
                    </div>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import homeIcon from 'ASSETS/image/home_icon.png'
  export default {
    props: {
      data: {
        type: Array,
        default: () => {
            return [{
                user_id: 'WFH001',
                nickname: 'WFH001',
                gender: 'WFH001',
                label: '新品推广',
                add_time: '王小虎',
                province: '退款',
                progress: '通过申请',
                level: '2019-05-03 17:33:33',
                ydh: '/',
                balance: 1444,
                invite_code: '23131',
                order: 12313,
                deal_money: 321341,
                expend: '111'
            }]
        }
      }
    },
    data () {
        return {
            homeIcon,
            searchOrder: '',
            searchUser: '',
            time: [new Date(), new Date()],
            reply: '',
            evaluate: [{
                name: '好评',
                value: 0,
                class: 'icon-haoping'
            }, {
                name: '中评',
                value: 1,
                class: 'icon-zhongping'
            }, {
                name: '差评',
                value: 2,
                class: 'icon-chaping'
            }],
            selectKey: '1',
            options: [{
                value: '1',
                label: '全部评价'
            }, {
                value: '2',
                label: '好评'
            }, {
                value: '3',
                label: '中评'
            }, {
                value: '4',
                label: '差评'
            }]
        }
    },
    methods: {
        handleSelectionChange () {},
        selectChange () {},
        receivingHandle (row) {
            this.$refs.multipleTable.toggleRowExpansion(row, true)
        },
        refundHandle () {},
        textareaChange () {
            console.log(this.reply)
        }
    }
  }
</script>

<style lang="less" scoped>
.table-box {
    .filtrate {
        height: 96px;
        margin-bottom: 10px;
        .lebel {
            padding-left: 20px;
            font-size: 15px;
        }
        .el-input {
            width: 200px;
        }
        .el-date-editor {
            width: 250px;
        }
        .el-button {
            margin-left: 10px;
        }
    }
    .img-list {
        img {
            height: 38px;
            width: 38px;
            margin: 5px;
        }
    }
    .pingjia-icon {
        font-size: 22px;
        color: #a6afbf;
        &.icon-haoping {
            color: #ff4b57;
        }
    }
    .con-icon {
        display: inline-block;
        cursor: pointer;
        padding: 5px;
    }
    .text-input {
        width: 90%;
        .el-textarea {
            width: 80%;
        }
        .btn-wrap {
            width: 70px;
            .el-button {
                margin-left: 10px;
                +.el-button {
                    margin-top: 10px;
                }
            }
        }
        > div {
            display: inline-block;
        }
    }
}
</style>
