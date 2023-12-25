'use client'

import React, { useEffect, useState } from 'react'
import { Typography } from 'antd'

export default function Home() {
  const { Title } = Typography
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <Title>Hello PWA</Title>
    </main>
  )
}
