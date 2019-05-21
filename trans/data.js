var data =
    {
        name: '资本充足率',
        tip: "资本充足率：888.88%",
        symbolSize: [120, 25],
        label: {
            rotate: 0
        },
        itemStyle: {
            normal: {
                label: {
                    show: true
                }
            }
        },
        children: [
            {
                name: '资本净额',
                tip: '资本净额：88888',
                //symbolSize: [100, 32],
                label: {
                    //rotate: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "inside"
                        }
                    }
                },
                children: [
                    {
                        name: '资本净额',
                        tip: "资本净额：88888",
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                }
                            },
                            emphasis: {
                                label: {
                                    show: false
                                },
                                borderWidth: 0
                            }
                        },
                        children: [
                            {
                                name: '核心一级资本',
                                tip: "核心一级资本",
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true
                                        },

                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        },
                                        borderWidth: 0
                                    }
                                },
                                children: [
                                    {
                                        name: '实收资本可计入部分',
                                        tip: "G4A合格资本情况表：1.1 实收资本可计入部分",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '资本公积可计入部分',
                                        tip: "G4A合格资本情况表：1.2 资本公积可计入部分",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '盈余公积',
                                        tip: "G4A合格资本情况表：1.3 盈余公积",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '一般风险准备',
                                        tip: "G4A合格资本情况表：1.4 一般风险准备",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
                                    {
                                        name: '未分配利润',
                                        tip: "G4A合格资本情况表：1.5 未分配利润",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
									{
                                        name: '少数股东资本可计入部分',
                                        tip: "G4A合格资本情况表：1.6 少数股东资本可计入部分",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    },
									{
                                        name: '其他',
                                        tip: "G4A合格资本情况表：1.7 其他",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    }
                                ]
                            },
                            {
                                name: '核心一级资本监管扣除项目',
                                tip: "核心一级资本监管扣除项目",
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true
                                        },

                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        },
                                        borderWidth: 0
                                    }
                                },
                                children: [
                                    {
                                        name: '全额扣除项目合计',
                                        tip: "全额扣除项目合计",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        },
										children: [
                                            {
												name: '商誉扣减与之相关的递延税负债后的净额',
												tip: "G4A合格资本情况表：2.1.1 商誉扣减与之相关的递延税负债后的净额",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '其他无形资产(不含土地使用权) 扣减与之相关的递延税负债后的净额',
												tip: "G4A合格资本情况表：2.1.2 其他无形资产(不含土地使用权) 扣减与之相关的递延税负债后的净额",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '依赖未来盈利的由经营亏损引起的净递延税资产',
												tip: "G4A合格资本情况表：2.1.3 依赖未来盈利的由经营亏损引起的净递延税资产",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '贷款损失准备缺口',
												tip: "贷款损失准备缺口",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												},
												children: [
													{
														name: '贷款损失准备缺口（采用权重法计算信用风险加权资产的银行）',
														tip:"G4A合格资本情况表：2.1.4.1贷款损失准备缺口（采用权重法计算信用风险加权资产的银行）",
														//symbolSize: [160, 30],
														itemStyle: {
															normal: {
																label: {
																	show: true
																},

															},
															emphasis: {
																label: {
																	show: false
																},
																borderWidth: 0
															}
														}		
													},
													{
														name: '贷款损失准备缺口（采用内评法计算信用风险加权资产的银行，包括内评法全覆盖和部分覆盖）',
														tip:"G4A合格资本情况表：2.1.4.2 贷款损失准备缺口（采用内评法计算信用风险加权资产的银行，包括内评法全覆盖和部分覆盖）",
														//symbolSize: [160, 30],
														itemStyle: {
															normal: {
																label: {
																	show: true
																},

															},
															emphasis: {
																label: {
																	show: false
																},
																borderWidth: 0
															}
														}		
													}
												]
											},
											{
												name: '资产证券化销售利得',
												tip: "G4A合格资本情况表：2.1.5 资产证券化销售利得",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '确定受益类的养老金资产扣减与之相关的递延税负债后的净额',
												tip: "G4A合格资本情况表：2.1.6 确定受益类的养老金资产扣减与之相关的递延税负债后的净额",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											},
											{
												name: '直接或间接持有本银行的普通股',
												tip: "G4A合格资本情况表：2.1.7 直接或间接持有本银行的普通股",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											},
											{
												name: '对未按公允价值计量的项目进行现金流套期形成的储备',
												tip: "G4A合格资本情况表：2.1.8 对未按公允价值计量的项目进行现金流套期形成的储备",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											},
											{
												name: '自身信用风险变化导致其负债公允价值变化带来的未实现损益',
												tip: "G4A合格资本情况表：2.1.9 自身信用风险变化导致其负债公允价值变化带来的未实现损益",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											},
											{
												name: '金融机构间通过协议相互持有的核心一级资本',
												tip: "G4A合格资本情况表：2.1.10 金融机构间通过协议相互持有的核心一级资本",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											},											,
											{
												name: '对有控制权但不并表的金融机构的核心一级资本投资',
												tip: "G4A合格资本情况表：2.1.11对有控制权但不并表的金融机构的核心一级资本投资",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											},											,
											{
												name: '有控制权但不并表的金融机构的核心一级资本缺口',
												tip: "G4A合格资本情况表：2.1.12有控制权但不并表的金融机构的核心一级资本缺口",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},

													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											}
										]
                                    }, {
                                        name: '门槛扣除项目合计',
                                        tip: "门槛扣除项目合计",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        },
										 children: [
											{
												name: '对未并表金融机构小额少数资本投资中的核心一级资本 (其中应扣除金额)',
												tip: "G4A合格资本情况表：2.2.1.对未并表金融机构小额少数资本投资中的核心一级资本",												
												itemStyle: {
													normal: {
														label: {
															show: true
														}
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											}, 
											{
												name: '对未并表金融机构大额少数资本投资中的核心一级资本 (其中应扣除金额)',
												tip: "G4A合格资本情况表：2.2.2.对未并表金融机构大额少数资本投资中的核心一级资本",												
												itemStyle: {
													normal: {
														label: {
															show: true
														}
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											}, 
											{
												name: '其他依赖于银行未来盈利的净递延税资产 (其中应扣除金额)',
												tip: "G4A合格资本情况表：2.2.3.其他依赖于银行未来盈利的净递延税资产",		itemStyle: {
													normal: {
														label: {
															show: true
														}
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											}, 
											{
												name: '对未并表金融机构大额少数资本投资中的核心一级资本和其他依赖于银行未来盈利的净递延税资产的未扣除部分',
												tip: "G4A合格资本情况表：2.2.4.对未并表金融机构大额少数资本投资中的核心一级资本和其他依赖于银行未来盈利的净递延税资产的未扣除部分",	
												itemStyle: {
													normal: {
														label: {
															show: true
														}
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}
											}
										]
									},
									{
                                        name: '其他应在核心一级资本中扣除的项目合计',
                                        tip: "G4A合格资本情况表：2.3 其他应在核心一级资本中扣除的项目合计",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    }, {
                                        name: '应从其他一级资本和二级资本中扣除的未扣缺口',
                                        tip: "G4A合格资本情况表：2.4 应从其他一级资本和二级资本中扣除的未扣缺口",
                                        //symbolSize: [160, 30],
                                        itemStyle: {
                                            normal: {
                                                label: {
                                                    show: true
                                                },

                                            },
                                            emphasis: {
                                                label: {
                                                    show: false
                                                },
                                                borderWidth: 0
                                            }
                                        }
                                    }
                                ]
                            },
							{
                                name: '其他一级资本',
                                tip: "其他一级资本",
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true
                                        },

                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        },
                                        borderWidth: 0
                                    }
                                },
								children: [
									{
										name: '其他一级资本工具及其溢价',
										tip:"其他一级资本工具及其溢价",
										//symbolSize: [160, 30],
										itemStyle: {
											normal: {
												label: {
													show: true
												},
											},
											emphasis: {
												label: {
													show: false
												},
												borderWidth: 0
											}
										},
                                        children: [
									        {
									        	name: '优先股及其溢价',
									        	tip:"G4A合格资本情况表：3.1.1 优先股及其溢价",
									        	//symbolSize: [160, 30],
									        	itemStyle: {
									        		normal: {
									        			label: {
									        				show: true
									        			},
									        		},
									        		emphasis: {
									        			label: {
									        				show: false
									        			},
									        			borderWidth: 0
									        		}
									        	}		
									        },
											{
									        	name: '其他工具及其溢价',
									        	tip:"G4A合格资本情况表：3.1.2 其他工具及其溢价",
									        	//symbolSize: [160, 30],
									        	itemStyle: {
									        		normal: {
									        			label: {
									        				show: true
									        			},
									        		},
									        		emphasis: {
									        			label: {
									        				show: false
									        			},
									        			borderWidth: 0
									        		}
									        	}		
									        }
								        ]										
									},
									{
									    name: '少数股东资本可计入部分',
									    tip:"G4A合格资本情况表：3.2 少数股东资本可计入部分",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    }		
									},
									{
									    name: '其他',
									    tip:"G4A合格资本情况表：3.3 其他",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    }		
									}
								]					
							},
							{
								name: '其他一级资本监管扣除项目',
                                tip: "其他一级资本监管扣除项目",
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true
                                        },

                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        },
                                        borderWidth: 0
                                    }
							    },
								child:[
								    {
									    name: '全额扣除项目',
									    tip:"全额扣除项目",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    },
                                        child:[
											{
												name: '直接或间接持有本银行其他一级资本',
												tip:"G4A合格资本情况表：4.1.1 直接或间接持有本银行其他一级资本",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '金融机构间通过协议相互持有的其他一级资本',
												tip:"G4A合格资本情况表：4.1.2 金融机构间通过协议相互持有的其他一级资本",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '对未并表金融机构大额少数资本投资中的其他一级资本',
												tip:"G4A合格资本情况表：4.1.3 对未并表金融机构大额少数资本投资中的其他一级资本",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '对有控制权但不并表的金融机构的其他一级资本投资',
												tip:"G4A合格资本情况表：4.1.4 对有控制权但不并表的金融机构的其他一级资本投资",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '有控制权但不并表的金融机构的其他一级资本缺口',
												tip:"G4A合格资本情况表：4.1.5 有控制权但不并表的金融机构的其他一级资本缺口",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											}									
								        ]										
									},
									{
									    name: '门槛扣除项目',
									    tip:"门槛扣除项目",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    },
										child:[
											{
												name: '对未并表金融机构小额少数资本投资中的其他一级资本 （其中应扣除部分）',
												tip:"G4A合格资本情况表：4.2.1.对未并表金融机构小额少数资本投资中的其他一级资本",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											}
										]
									},
									{
									    name: '其他应在其他一级资本中扣除的项目',
									    tip:"G4A合格资本情况表：4.3 其他应在其他一级资本中扣除的项目",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    }
									},
									{
									    name: '应从二级资本中扣除的未扣缺口',
									    tip:"G4A合格资本情况表：4.4 应从二级资本中扣除的未扣缺口",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    }
									}									
								]
						    },
							{
								name: '二级资本',
                                tip: "二级资本",
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true
                                        },

                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        },
                                        borderWidth: 0
                                    }
							    },
								child:[
								    {
									    name: '二级资本工具及其溢价可计入金额',
									    tip:"G4A合格资本情况表：5.1 二级资本工具及其溢价可计入金额",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    }
								    },
									{
									    name: '超额贷款损失准备',
									    tip:"超额贷款损失准备",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    },
										child:[
											{
												name: '超额贷款损失准备（采用权重法计算信用风险加权资产的银行）',
												tip:"G4A合格资本情况表：5.2.1 超额贷款损失准备（采用权重法计算信用风险加权资产的银行）",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '超额贷款损失准备（采用内评法计算信用风险加权资产的银行，包括内评法全覆盖和部分覆盖）',
												tip:"G4A合格资本情况表：5.2.2 超额贷款损失准备（采用内评法计算信用风险加权资产的银行，包括内评法全覆盖和部分覆盖）",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											}
										]
								    },
									{
									    name: '少数股东资本可计入部分',
									    tip:"G4A合格资本情况表：5.3 少数股东资本可计入部分",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    }
								    },
									{
									    name: '其他',
									    tip:"G4A合格资本情况表：5.4 其他",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    }
								    }
							    ]
							},
							{
								name: '二级资本监管扣除项目',
                                tip: "二级资本监管扣除项目",
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true
                                        },

                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        },
                                        borderWidth: 0
                                    }
							    },
								child:[
								    {
									    name: '全额扣除项目',
									    tip:"全额扣除项目",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    },
										child:[
											{
												name: '直接或间接持有本银行的二级资本',
												tip:"G4A合格资本情况表：6.1.1 直接或间接持有本银行的二级资本",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '金融机构间通过协议相互持有的二级资本',
												tip:"G4A合格资本情况表：6.1.2 金融机构间通过协议相互持有的二级资本",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '对未并表金融机构大额少数资本投资中的二级资本',
												tip:"G4A合格资本情况表：6.1.3 对未并表金融机构大额少数资本投资中的二级资本",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '对有控制权但不并表的金融机构的二级资本投资',
												tip:"G4A合格资本情况表：6.1.4 对有控制权但不并表的金融机构的二级资本投资",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '有控制权但不并表的金融机构的二级资本缺口',
												tip:"G4A合格资本情况表：6.1.5 有控制权但不并表的金融机构的二级资本缺口",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											}
										]
								    },
									{
									    name: '门槛扣除项目',
									    tip:"门槛扣除项目",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    },
										child:[
											{
												name: '对未并表金融机构小额少数资本投资中的二级资本 （其中应扣除部分）',
												tip:"G4A合格资本情况表：6.2.1.对未并表金融机构小额少数资本投资中的二级资本 ",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											}
										]
								    },
									{
									    name: '其他应在二级资本中扣除的项目',
									    tip:"G4A合格资本情况表：6.3其他应在二级资本中扣除的项目",
									    //symbolSize: [160, 30],
									    itemStyle: {
									        normal: {
									            label: {
									        		show: true
									        	},
									        },
									        emphasis: {
									        	label: {
									        		show: false
									        	},
									        	borderWidth: 0
									        }
									    }
								    }
								]									
							}						
                        ]
                    }					
                ]
            },
            {
                name: '风险加权资产',
                tip: '风险加权资产：88888',
                //symbolSize: [100, 32],
                label: {
                    //rotate: 0
                },
                itemStyle: {
                    normal: {
                        label: {
                            show: true,
                            position: "inside"
                        }
                    }
                },
                children: [
                   {
                        name: '应用资本底线及校准后的风险加权资产合计',
                        tip: "应用资本底线及校准后的风险加权资产合计",
                        //symbolSize: [40, 80],
                        itemStyle: {
                            normal: {
                                label: {
                                    show: true
                                },

                            },
                            emphasis: {
                                label: {
                                    show: false
                                },
                                borderWidth: 0
                            }
                        },
                        children: [
                            {
                                name: '校准前风险加权资产合计',
                                tip: "校准前风险加权资产合计",
                                //symbolSize: [25, 100],
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true
                                        },

                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        },
                                        borderWidth: 0
                                    }
                                },
								child:[
									{
										name: '信用风险加权资产',
										tip:"信用风险加权资产",
										//symbolSize: [160, 30],
										itemStyle: {
											normal: {
												label: {
													show: true
												},
											},
											emphasis: {
												label: {
													show: false
												},
												borderWidth: 0
											}
										},
										child:[
											{
												name: '表内风险加权资产',
												tip:"G40 资本充足率汇总表：4.1.表内风险加权资产 ",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '表外风险加权资产',
												tip:"G40 资本充足率汇总表：4.2.表外风险加权资产 ",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '交易对手信用风险暴露的风险加权资产',
												tip:"G40 资本充足率汇总表：6.2.1.对未并表金融机构小额少数资本投资中的二级资本 ",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												},
                                                 child:[
												    {
													    name: '权重法',
														tip:"G40 资本充足率汇总表：4.3.1权重法 ",
														//symbolSize: [160, 30],
														itemStyle: {
															normal: {
																label: {
																	show: true
																},
															},
															emphasis: {
																label: {
																	show: false
																},
																borderWidth: 0
															}
														}
												    },
													{
													    name: '内评法',
														tip:"G40 资本充足率汇总表：4.3.2内评法 ",
														//symbolSize: [160, 30],
														itemStyle: {
															normal: {
																label: {
																	show: true
																},
															},
															emphasis: {
																label: {
																	show: false
																},
																borderWidth: 0
															}
														}
												    }
												 ]												
											}
										]										
									},
									{
										name: '市场风险加权资产',
										tip:"市场风险加权资产",
										//symbolSize: [160, 30],
										itemStyle: {
											normal: {
												label: {
													show: true
												},
											},
											emphasis: {
												label: {
													show: false
												},
												borderWidth: 0
											}
										},
										child:[
											{
												name: '标准法',
												tip:"G40 资本充足率汇总表：5.1标准法 ",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '内部模型法',
												tip:"G40 资本充足率汇总表：5.2内部模型法",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											}
										]										
									},
									{
										name: '操作风险加权资产',
										tip:"操作风险加权资产",
										//symbolSize: [160, 30],
										itemStyle: {
											normal: {
												label: {
													show: true
												},
											},
											emphasis: {
												label: {
													show: false
												},
												borderWidth: 0
											}
										},
										child:[
											{
												name: '基本指标法',
												tip:"G40 资本充足率汇总表：6.1基本指标法",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '标准法',
												tip:"G40 资本充足率汇总表：6.2标准法",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											},
											{
												name: '高级计量法',
												tip:"G40 资本充足率汇总表：6.3高级计量法",
												//symbolSize: [160, 30],
												itemStyle: {
													normal: {
														label: {
															show: true
														},
													},
													emphasis: {
														label: {
															show: false
														},
														borderWidth: 0
													}
												}		
											}
										]										
									}
								]
                            }, {
                                name: '因应用资本底线及校准而导致的额外风险加权资产（资本计量高级方法银行适用）',
                                tip: "G40 资本充足率汇总表：8.因应用资本底线及校准而导致的额外风险加权资产（资本计量高级方法银行适用）",
                                //symbolSize: [160, 30],
                                itemStyle: {
                                    normal: {
                                        label: {
                                            show: true
                                        },

                                    },
                                    emphasis: {
                                        label: {
                                            show: false
                                        },
                                        borderWidth: 0
                                    }
                                }
                            }
                        ]
                    }
                ]

            }
        ]
    }
    ;