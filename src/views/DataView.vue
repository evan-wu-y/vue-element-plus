<script setup lang="ts">
// 数据与类型

type Department = '技术部' | '市场部' | '销售部' | '人力资源部' | '财务部' | '产品部'
type Gender = '男' | '女'
type EmploymentStatus = '在职' | '离职'

interface Employee {
  id: number
  name: string
  age: number
  gender: Gender
  department: Department
  position: string
  hireDate: string
  salary: number
  status: EmploymentStatus
  avatar: string
}

// 生成模拟数据
const generateMockData = (): Employee[] => {
  const departments: Department[] = ['技术部', '市场部', '销售部', '人力资源部', '财务部', '产品部']
  const positions: Record<Department, string[]> = {
    技术部: ['前端开发', '后端开发', 'UI设计', '测试工程师', '运维工程师'],
    市场部: ['市场专员', '市场经理', '品牌策划', '活动策划'],
    销售部: ['销售代表', '销售经理', '大客户代表'],
    人力资源部: ['招聘专员', '薪酬绩效专员', 'HRBP'],
    财务部: ['会计', '出纳', '财务分析师'],
    产品部: ['产品经理', '产品助理', '数据分析师'],
  } as const

  const data: Employee[] = []

  for (let i = 1; i <= 100; i++) {
    const department: Department = departments[Math.floor(Math.random() * departments.length)]
    const position = positions[department][Math.floor(Math.random() * positions[department].length)]
    const gender: Gender = Math.random() > 0.5 ? '男' : '女'
    const age = Math.floor(Math.random() * 30) + 20 // 20-50岁
    const hireYear = Math.floor(Math.random() * 10) + 2014 // 2014-2023年
    const hireMonth = Math.floor(Math.random() * 12) + 1
    const hireDay = Math.floor(Math.random() * 28) + 1
    const hireDate = `${hireYear}-${hireMonth.toString().padStart(2, '0')}-${hireDay.toString().padStart(2, '0')}`
    const salary = Math.floor(Math.random() * 20000) + 5000 // 5000-25000元
    const status: EmploymentStatus = Math.random() > 0.1 ? '在职' : '离职' // 90%在职

    data.push({
      id: i,
      name: `员工${i}`,
      age,
      gender,
      department,
      position,
      hireDate,
      salary,
      status,
      avatar: `https://picsum.photos/seed/${i}/200/200`,
    })
  }

  return data
}

// 原始数据
const tableData = ref<Employee[]>(generateMockData())

// 工具: 薪资格式化
const formatSalary = (value: number) => `¥${value.toLocaleString()}`
</script>

<template>
  <div class="mx-auto rounded-lg max-w-7xl shadow-md overflow-hidden">
    <div class="p-6 border-b border-border">
      <h2 class="text-2xl text-[--ep-text-color-primary] font-bold flex items-center">
        <i class="i-fa-table text-blue-500 mr-2"></i>
        员工信息表格
      </h2>
    </div>

    <div class="p-6">
      <div class="overflow-x-auto">
        <table class="min-w-full border-collapse">
          <thead>
            <tr class="text-left bg-[--ep-bg-color-page]">
              <th class="px-4 py-2 border-b border-border">ID</th>
              <th class="px-4 py-2 border-b border-border">姓名</th>
              <th class="px-4 py-2 border-b border-border">年龄</th>
              <th class="px-4 py-2 border-b border-border">性别</th>
              <th class="px-4 py-2 border-b border-border">部门</th>
              <th class="px-4 py-2 border-b border-border">职位</th>
              <th class="px-4 py-2 border-b border-border">入职日期</th>
              <th class="px-4 py-2 border-b border-border">薪资</th>
              <th class="px-4 py-2 border-b border-border">状态</th>
              <th class="px-4 py-2 border-b border-border">操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in tableData" :key="row.id" class="hover:bg-[--ep-bg-color-page]">
              <td class="px-4 py-2 border-b border-border">{{ row.id }}</td>
              <td class="px-4 py-2 border-b border-border">
                <div class="flex items-center">
                  <img
                    :src="row.avatar"
                    alt="头像"
                    class="mr-2 rounded-full h-8 w-8 object-cover"
                  />
                  {{ row.name }}
                </div>
              </td>
              <td class="px-4 py-2 border-b border-border">{{ row.age }}</td>
              <td class="px-4 py-2 border-b border-border">{{ row.department }}</td>
              <td class="px-4 py-2 border-b border-border">{{ row.gender }}</td>
              <td class="px-4 py-2 border-b border-border">{{ row.position }}</td>
              <td class="px-4 py-2 border-b border-border">{{ row.hireDate }}</td>
              <td class="px-4 py-2 border-b border-border">{{ formatSalary(row.salary) }}</td>
              <td class="px-4 py-2 border-b border-border">
                <span :class="row.status === '在职' ? 'text-green-600' : 'text-red-600'">{{
                  row.status
                }}</span>
              </td>
              <td class="px-4 py-2 border-b border-border">
                <button
                  type="button"
                  class="px-2 py-1 rounded inline-flex gap-1 items-center hover:bg-gray-100"
                >
                  <i class="i-carbon-edit"></i>
                  编辑
                </button>
                <button
                  type="button"
                  class="text-red-600 px-2 py-1 rounded inline-flex gap-1 items-center hover:bg-red-50"
                >
                  <i class="i-carbon-trash-can"></i>
                  删除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style></style>
