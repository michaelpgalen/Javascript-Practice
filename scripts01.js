'use strict'

// const dataSet = JSON.parse(data);

const dataString = String.raw`{
	"316de59e-7baa-48ee-b82c-c819d0b9452b": {
		"id": "316de59e-7baa-48ee-b82c-c819d0b9452b",
		"hosts": ["0d7c04c4-2c6e-4b1d-9ef0-94fa3a23d7c2", "142d2f66-b40b-453e-b9c4-f02d018d1d14", "1cb9088f-8d60-4e10-a6c3-e5e56084aab7", "3e5c1a63-0b7a-449c-805b-9f39cde78847", "4d82250b-da32-4026-a577-c36eb0121a7e", "4df216c6-89c2-40cb-aeda-6570e1025639", "5bc438ba-8fed-4842-89f8-66d3ca12000a", "74bc918f-d308-408b-9a78-396babccd398", "845c78c9-d31c-4c61-94bd-3c56d3f7914e", "94a7a4a4-1423-4549-bb97-a2242113195b", "990d9efd-4c09-42eb-9835-aa2f55cb5728", "9ba78d52-e9d8-46b2-8a4f-e2899a822304", "b6d921a5-0663-46b1-ad59-c72fab8cfa62", "c012e38e-a23f-459b-8355-3e14115cfd80", "d499c19d-5ac2-471d-8251-132f23a4cf81", "fa03303e-1371-4ac5-8b81-6a53aa7a0938"],
		"patches": ["b5b88425-a5b0-4481-a522-73d40a8e0d4b", "f2c3aad2-5216-4d95-92ae-d8d3d5e2526b", "704b5296-05dc-432e-9fbe-3936a992634a", "1088f842-2df6-4f14-af29-5936d9dcc9de"],
		"risk": 679.7045311578589,
		"identifier": "CVE-2019-0708",
		"modified": 1622744100,
		"description": "A remote code execution vulnerability exists in Remote Desktop Services formerly known as Terminal Services when an unauthenticated attacker connects to the target system using RDP and sends specially crafted requests, aka 'Remote Desktop Services Remote Code Execution Vulnerability'.",
		"urls": "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2019-0708\nhttps://cert-portal.siemens.com/productcert/pdf/ssa-932041.pdf\nhttps://cert-portal.siemens.com/productcert/pdf/ssa-832947.pdf\nhttps://cert-portal.siemens.com/productcert/pdf/ssa-616199.pdf\nhttps://cert-portal.siemens.com/productcert/pdf/ssa-433987.pdf\nhttps://cert-portal.siemens.com/productcert/pdf/ssa-406175.pdf\nhttps://cert-portal.siemens.com/productcert/pdf/ssa-166360.pdf\nhttp://www.huawei.com/en/psirt/security-advisories/huawei-sa-20190529-01-windows-en\nhttp://www.huawei.com/en/psirt/security-notices/huawei-sn-20190515-01-windows-en\nhttp://packetstormsecurity.com/files/153133/Microsoft-Windows-Remote-Desktop-BlueKeep-Denial-Of-Service.html\nhttp://packetstormsecurity.com/files/153627/Microsoft-Windows-RDP-BlueKeep-Denial-Of-Service.html\nhttp://packetstormsecurity.com/files/154579/BlueKeep-RDP-Remote-Windows-Kernel-Use-After-Free.html\nhttp://packetstormsecurity.com/files/155389/Microsoft-Windows-7-x86-BlueKeep-RDP-Use-After-Free.html\nhttp://packetstormsecurity.com/files/162960/Microsoft-RDP-Remote-Code-Execution.html\n"
	},
	"a1f5e30f-68cb-41e7-8ab8-1391100c6c92": {
		"id": "a1f5e30f-68cb-41e7-8ab8-1391100c6c92",
		"hosts": ["0d7c04c4-2c6e-4b1d-9ef0-94fa3a23d7c2", "1cb9088f-8d60-4e10-a6c3-e5e56084aab7", "3e5c1a63-0b7a-449c-805b-9f39cde78847", "4df216c6-89c2-40cb-aeda-6570e1025639", "74bc918f-d308-408b-9a78-396babccd398", "94a7a4a4-1423-4549-bb97-a2242113195b", "990d9efd-4c09-42eb-9835-aa2f55cb5728", "9ba78d52-e9d8-46b2-8a4f-e2899a822304", "b6d921a5-0663-46b1-ad59-c72fab8cfa62", "c012e38e-a23f-459b-8355-3e14115cfd80", "d499c19d-5ac2-471d-8251-132f23a4cf81", "fa03303e-1371-4ac5-8b81-6a53aa7a0938"],
		"patches": ["63a30aa4-bdec-4042-9e6a-c79251143a66"],
		"risk": 650.4092820131965,
		"identifier": "CVE-2018-1038",
		"modified": 1570060980,
		"description": "The Windows kernel in Windows 7 SP1 and Windows Server 2008 R2 SP1 allows an elevation of privilege vulnerability due to the way it handles objects in memory, aka \"Windows Kernel Elevation of Privilege Vulnerability.\"",
		"urls": "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2018-1038\nhttp://www.securityfocus.com/bid/103549\nhttp://www.securitytracker.com/id/1040632\nhttps://blog.xpnsec.com/total-meltdown-cve-2018-1038/\nhttps://www.exploit-db.com/exploits/44581/\n"
	},
	"95e740b7-c065-42bc-8869-0855f8fc3e89": {
		"id": "95e740b7-c065-42bc-8869-0855f8fc3e89",
		"hosts": ["037bd5a2-8442-4b00-9a52-673721936a91", "07610876-9c9b-4dc9-a4a5-74bdf69a65bc", "090d1360-b813-411e-92e9-663f033b7576", "0d7c04c4-2c6e-4b1d-9ef0-94fa3a23d7c2", "0e08ed8b-a8d6-4287-a8f3-a796a8d6859c", "13bab5e5-cd14-4058-8345-8c2347f46f78", "177ae68e-1396-4d24-b872-849a4bb6d8f7", "1945e750-a96f-49a4-b4c9-2949382fee69", "1c08fbc7-5d35-498b-a92f-f3b16310c03a", "1cb9088f-8d60-4e10-a6c3-e5e56084aab7", "20171197-5e10-4420-9032-01a41bc9d76a", "20b07fd7-3014-4804-a32f-b439de9f1d3d", "2455dc2c-53f1-4a88-ae33-9223b8ecf18e", "253e959e-7fe9-410a-8d7d-781570c7c87f", "29dc54b9-6b35-4aee-a12b-785b58c9d57d", "2c4e2652-33a2-415c-9634-2370d91dee09", "2cddbfb9-3cf8-4f8c-b6a7-d5d8bf5e8513", "342c6d40-f282-42e7-975e-6fcb922014f1", "3b8e91b9-de7c-47cc-8f23-06ce177cbb89", "3bb97ffd-2e72-48cb-b3c0-c5176fa5354d", "3bfbe186-fc79-4f6d-a668-59026d9ee00f", "3e5c1a63-0b7a-449c-805b-9f39cde78847", "3f43c7c2-c400-44c8-b593-3418dfd5d18c", "46b3a877-c44e-4265-8c34-5f042f6efad2", "4adeb960-aa02-4ecb-848e-89c50db8e1de", "4df216c6-89c2-40cb-aeda-6570e1025639", "5859bc72-07b2-4838-8954-83b8172afc87", "655b76ae-4224-41be-81b0-5ca7ed6199d4", "6c40e7a7-f73c-43e4-9f17-efb476948768", "742da8d9-5eac-4504-8b1b-bbb765f80cef", "74bc918f-d308-408b-9a78-396babccd398", "76725978-a4df-4806-b1b9-7892e892e19f", "7ca18a92-4a7f-4bbf-a88d-2b08989ae105", "7e527831-81f0-4d42-a3e9-54d0c3e7face", "811eda75-b581-4153-8db8-68c18d8bd159", "82031dc7-6a2a-48a1-b502-874f7d3adbbb", "8922616b-e82c-4fa4-a2dd-66eb72e394f8", "8b7db660-304b-4d3c-832d-003c99e65348", "909d44e6-71f5-4078-884c-8fa7ac808c95", "9171e055-64b8-43c3-a04e-c9a0218af555", "92469e6a-721a-4aa8-8b6d-bffd1c85093d", "94a7a4a4-1423-4549-bb97-a2242113195b", "9845d386-9f8f-4319-859b-bd2e920ccd66", "990d9efd-4c09-42eb-9835-aa2f55cb5728", "9a2703a6-82f5-4ffa-b015-3f132870d769", "9a7ac241-da0a-4f08-b7ce-95ff5f8e95fa", "9ba78d52-e9d8-46b2-8a4f-e2899a822304", "9cee5522-2388-44c5-8e98-cb254e863004", "9fcaccc3-e5e6-4031-b93a-cf8f9fac9843", "a623c3ce-900c-4627-a0b3-dbfc3becaeb7", "aadc8168-29b8-457a-ba66-e9ed1237d4b6", "ac1de34c-f8e9-45ba-849d-addc48af35ef", "b1e45eea-59e3-4c30-84ac-2c2de79473ab", "b6d921a5-0663-46b1-ad59-c72fab8cfa62", "b9afc7e1-6821-4c85-8847-e90d92fc6aac", "c012e38e-a23f-459b-8355-3e14115cfd80", "c069f9e4-928d-4a28-9796-41840b3cb777", "c3f33f6c-5c32-4169-b9e7-fd58c6ad827f", "c99d92bf-30ce-44f2-8963-4f0388ebaa0e", "d29fb003-9853-4d28-a69f-6e8f96d9938a", "d35c0f95-88ae-4abf-9f6e-dd4f0ee71710", "d499c19d-5ac2-471d-8251-132f23a4cf81", "da9f8882-10e2-4f41-a5d3-3e48db6b096e", "e1fafa62-2827-4ef8-8292-09e55a8069ce", "e5ea8e6c-25e7-48a0-bafb-432322cfdece", "e9b5b1ec-77a4-48bb-b20b-5b42b1525490", "ed58100b-7a23-4869-9a2d-d627a6261250", "eee8193e-8f79-48d6-af80-c0bffa48bf4f", "f02821dd-d850-4579-a231-a581c8867c5a", "f0646950-fbf8-43ac-a075-4ee3cb73e3d0", "f34b8f45-f474-4cd9-8902-86b2d1a82b87", "f89f65d3-aea9-4484-8dbf-b74567cf789f", "f9e67534-2715-4078-848e-d37f1809c256", "fa03303e-1371-4ac5-8b81-6a53aa7a0938", "fadba30f-37fb-467a-a4d3-9903f9fc7315", "ff41b402-bfe7-4826-b17a-ad98984a718b"],
		"patches": ["09b402f3-7e78-4053-839b-cec1453b4369", "93ad49bb-722d-43e2-8a92-2fbffcb15ef7", "2f0b0498-d273-4e7d-961a-75830c8accb6", "fe8b25e9-4959-4221-9ed5-4468d766a9cd", "78f1d566-f662-46dc-a3e3-16a2d534507d", "a8e7ad4e-6c12-4901-97ed-2aa3cf1d1bf6", "a0d63efc-dd63-45d3-b1d9-99fab048d3e4", "794e052e-2379-4fa8-84a9-ca5444cbfd03", "d01878fa-556a-4614-a7f3-85fa391910f8", "46ae13ab-d753-484f-9364-567210338cb5", "b7676a66-e226-4fce-8c9b-158c7cc6dde6", "c249ef73-6b13-46b2-8756-71dead4247e4", "c5861f2a-4384-494b-b588-8e1c4c5e9816", "ad899dfb-50dc-454c-a4f6-b36fd36e97cd", "28fb8c22-e990-445d-af99-94b929873ea4", "156f4121-6990-48fb-bfe1-e5dd86e737a4", "98e3bdd3-91c0-40da-9e93-ccc63db20464"],
		"risk": 48.333152105944365,
		"identifier": "CVE-2019-0541",
		"modified": 1601297880,
		"description": "A remote code execution vulnerability exists in the way that the MSHTML engine inproperly validates input, aka \"MSHTML Engine Remote Code Execution Vulnerability.\" This affects Microsoft Office, Microsoft Office Word Viewer, Internet Explorer 9, Internet Explorer 11, Microsoft Excel Viewer, Internet Explorer 10, Office 365 ProPlus.",
		"urls": "https://portal.msrc.microsoft.com/en-US/security-guidance/advisory/CVE-2019-0541\nhttp://www.securityfocus.com/bid/106402\nhttps://www.exploit-db.com/exploits/46536/\n"
	},
  "8a1ffbee-b29f-43de-ae22-206fe738f220": {
		"id": "8a1ffbee-b29f-43de-ae22-206fe738f220",
		"hosts": ["090d1360-b813-411e-92e9-663f033b7576", "13bab5e5-cd14-4058-8345-8c2347f46f78", "177ae68e-1396-4d24-b872-849a4bb6d8f7", "20171197-5e10-4420-9032-01a41bc9d76a", "20b07fd7-3014-4804-a32f-b439de9f1d3d", "2455dc2c-53f1-4a88-ae33-9223b8ecf18e", "2c4e2652-33a2-415c-9634-2370d91dee09", "2cddbfb9-3cf8-4f8c-b6a7-d5d8bf5e8513", "3b8e91b9-de7c-47cc-8f23-06ce177cbb89", "82031dc7-6a2a-48a1-b502-874f7d3adbbb", "8922616b-e82c-4fa4-a2dd-66eb72e394f8", "909d44e6-71f5-4078-884c-8fa7ac808c95", "9171e055-64b8-43c3-a04e-c9a0218af555", "9a7ac241-da0a-4f08-b7ce-95ff5f8e95fa", "aadc8168-29b8-457a-ba66-e9ed1237d4b6", "b1e45eea-59e3-4c30-84ac-2c2de79473ab", "c069f9e4-928d-4a28-9796-41840b3cb777", "da9f8882-10e2-4f41-a5d3-3e48db6b096e", "e1fafa62-2827-4ef8-8292-09e55a8069ce", "eee8193e-8f79-48d6-af80-c0bffa48bf4f", "f0646950-fbf8-43ac-a075-4ee3cb73e3d0", "f9e67534-2715-4078-848e-d37f1809c256", "fadba30f-37fb-467a-a4d3-9903f9fc7315"],
		"patches": ["6555fdd6-c094-4249-8ead-c56f576085b6", "da884e54-3a13-4ce7-915f-c6ba3082097c", "5a8b42aa-c984-4721-8ab6-db0556837a26", "2b47e24b-9ffe-4107-a9a8-9e031599440f", "09e7900f-ec0a-49c2-afca-ddea114539ec", "8c548ce9-d371-4fd1-b4c6-aa346fba4064", "9d4e4302-ee36-43d8-8bfb-c3d2139d7fa2", "388b8d7b-eca4-4f3f-9632-93ce3929b2ef", "7bd8bf30-fd90-456e-92b2-3b500af263f5"],
		"risk": 50.023831331086875,
		"identifier": "CVE-2018-4878",
		"modified": 1631121660,
		"description": "A use-after-free vulnerability was discovered in Adobe Flash Player before 28.0.0.161. This vulnerability occurs due to a dangling pointer in the Primetime SDK related to media player handling of listener objects. A successful attack can lead to arbitrary code execution. This was exploited in the wild in January and February 2018.",
		"urls": "https://www.trendmicro.com/vinfo/us/security/news/vulnerabilities-and-exploits/north-korean-hackers-allegedly-exploit-adobe-flash-player-vulnerability-cve-2018-4878-against-south-korean-targets\nhttps://www.fireeye.com/blog/threat-research/2018/02/attacks-leveraging-adobe-zero-day.html\nhttps://threatpost.com/adobe-flash-player-zero-day-spotted-in-the-wild/129742/\nhttps://helpx.adobe.com/security/products/flash-player/apsb18-03.html\nhttp://www.securitytracker.com/id/1040318\nhttp://www.securityfocus.com/bid/102893\nhttp://blog.talosintelligence.com/2018/02/group-123-goes-wild.html\nhttps://access.redhat.com/errata/RHSA-2018:0285\nhttps://github.com/vysec/CVE-2018-4878\nhttps://github.com/InQuest/malware-samples/tree/master/CVE-2018-4878-Adobe-Flash-DRM-UAF-0day\nhttps://www.darkreading.com/threat-intelligence/adobe-flash-vulnerability-reappears-in-malicious-word-files/d/d-id/1331139\nhttps://blog.morphisec.com/flash-exploit-cve-2018-4878-spotted-in-the-wild-massive-malspam-campaign\nhttps://securingtomorrow.mcafee.com/mcafee-labs/hackers-bypassed-adobe-flash-protection-mechanism/\nhttps://www.exploit-db.com/exploits/44412/\n"
	}
}`
// const dataStringEscaped = dataString.replace(/\n/g, '\\n')
const dataSet = JSON.parse(dataString)
//console.log(dataSet)

// gets an array of key/value array pairs = [ ['88woidnwo98988', {all object details present}], ['998s98skje9', {}] ]
const topEntries = Object.entries(dataSet)
console.log(topEntries)

const dataWrapper = document.getElementById('dataWrapper')

topEntries.sort(function (a,b) {
  a = a[1].risk
  b = b[1].risk
  return (a - b)
})
.reverse()
.forEach((item) => {
  // logs 1 array for each entry = [8787dkj, {}]
  console.log(item)
  // item[1].prop works to pull out a value for that prop
  console.log(item[1].description)

  const cveContainer = document.createElement('div')
  cveContainer.className = 'cveContainer'
  cveContainer.risk = item[1].risk
  dataWrapper.append(cveContainer)

  const buttonRow = document.createElement('button')
  buttonRow.className = 'accordion'
  cveContainer.append(buttonRow)
  buttonRow.onclick = panelToggle

  const cveId = document.createElement('div')
  cveId.innerHTML = item[1].identifier
  cveId.className = 'cveAccItem'
  buttonRow.append(cveId)

  const risk = document.createElement('div')
  risk.className = 'cveAccItem risk'
  risk.innerHTML = item[1].risk
  const riskNum = item[1].risk
  switch (true) {
    case (riskNum < 50): risk.style = 'background-color: PaleGreen'
      break
    case (riskNum < 100): risk.style = 'background-color: Orange'
      break
    case (riskNum >= 100): risk.style = 'background-color: Tomato'
      break
  }
  buttonRow.append(risk)

  const hosts = document.createElement('div')
  hosts.className = 'cveAccItem hosts'
  hosts.innerHTML = item[1].hosts.length
	const hostsBar = document.createElement('div')
	hostsBar.style.width = (item[1].hosts.length * 3) + 'px'
	hostsBar.style.borderBottom = '6px dotted darkcyan'
	hosts.append(hostsBar)
  buttonRow.append(hosts)

  const detailsPanel = document.createElement('div')
  detailsPanel.className = 'detailsPanel'
  cveContainer.append(detailsPanel)

  const detailsCol1 = document.createElement('div')
  detailsCol1.className = 'detailsCol'
  detailsPanel.append(detailsCol1)

  const descriptionTitle = document.createElement('h4')
  descriptionTitle.classname = 'detailTitle'
  descriptionTitle.innerHTML = 'Description'
  detailsCol1.append(descriptionTitle)

  const description = document.createElement('p')
  description.className = 'cveDetails description'
  description.innerHTML = item[1].description
  detailsCol1.append(description)

  const hostsTitle = document.createElement('h4')
  hostsTitle.classname = 'detailTitle'
  hostsTitle.innerHTML = 'Hosts'
  detailsCol1.append(hostsTitle)

  const hostsList = document.createElement('ul')
  hostsList.className = 'cveDetails'
	item[1].hosts.forEach((host) => {
		const hostLink = document.createElement('li')
		hostLink.innerHTML = host
		hostsList.append(hostLink)
	});
  detailsCol1.append(hostsList)


  const localCveIdTitle = document.createElement('h4')
  localCveIdTitle.classname = 'detailTitle'
  localCveIdTitle.innerHTML = 'Local ID'
  detailsCol1.append(localCveIdTitle)

  const localCveId = document.createElement('p')
  localCveId.className = 'cveDetails'
  localCveId.innerHTML = item[1].id
  detailsCol1.append(localCveId)

  const detailsCol2 = document.createElement('div')
  detailsCol2.className = 'detailsCol'
  detailsPanel.append(detailsCol2)

  const patchesTitle = document.createElement('h4')
  patchesTitle.classname = 'detailTitle'
  patchesTitle.innerHTML = 'Patches'
  detailsCol2.append(patchesTitle)

  const patches = document.createElement('ul')
  patches.className = 'cveDetails'
	item[1].patches.forEach((patch) => {
		const patchLi = document.createElement('li')
		patchLi.innerHTML = patch
		patches.append(patchLi)
	});
  detailsCol2.append(patches)

  const urlsTitle = document.createElement('h4')
  urlsTitle.classname = 'detailTitle'
  urlsTitle.innerHTML = 'URLs'
  detailsCol2.append(urlsTitle)

  const urls = document.createElement('ul')
  urls.className = 'cveDetails'
	const urlsArray = item[1].urls.trim().split('\n')
	urlsArray.forEach((link) => {
		const urlLi = document.createElement('li')
		const urlA = document.createElement('a')
		urlA.innerHTML = link
		urlA.href = link
		urlLi.append(urlA)
		urls.append(urlLi)
	});
  detailsCol2.append(urls)

  const modifiedTitle = document.createElement('h4')
  modifiedTitle.classname = 'detailTitle'
  modifiedTitle.innerHTML = 'Modified'
  detailsCol2.append(modifiedTitle)

  const modified = document.createElement('p')
  modified.className = 'cveDetails'
  modified.innerHTML = item[1].modified
  detailsCol2.append(modified)
});

// show accordian panel on click
let acc = document.querySelectorAll('accordion')

function panelToggle() {
  this.classList.toggle('active')

  let panel = this.nextElementSibling
  if (panel.style.display === "flex") {
    panel.style.display = "none"} else{
      panel.style.display = "flex"
    }

  if (panel.style.maxHeight) {
    panel.style.maxHeight = null;
    } else {
    panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

const dataHeaderWrapper = document.createElement('div')
dataHeaderWrapper.className = 'cveContainer'

const dataHeader = document.createElement('div')
dataHeader.className = 'dataHeader'
dataHeaderWrapper.append(dataHeader)

const headerCve = document.createElement('div')
headerCve.className = 'dataHeaderItem'
headerCve.innerHTML = '<strong>CVE Identifier</strong>'
dataHeader.append(headerCve)

const headerRisk = document.createElement('div')
headerRisk.className = 'dataHeaderItem'
headerRisk.innerHTML = '<strong>Risk</strong>'
dataHeader.append(headerRisk)

const headerHosts = document.createElement('div')
headerHosts.className = 'dataHeaderItem'
headerHosts.innerHTML = '<strong>Number of Hosts</strong>'
dataHeader.append(headerHosts)

dataWrapper.prepend(dataHeaderWrapper)

// Begin bar chart creation
// const chartContainer = document.getElementById('chartContainer')
//
// for (let i = 0; i < 4; i++) {
//   const bar = document.createElement('div')
//   bar.className = 'bar'
//   bar.id = 'bar-' + i
//   chartContainer.append(bar)
// };