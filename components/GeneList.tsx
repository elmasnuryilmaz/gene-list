"use client";

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const GeneList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const genes = [
    // Highest positive IncLevelDifference
    { name: "ENSG00000288723", fdr: 0.00208, difference: 0.817, regulation: "Enhanced" },
    { name: "ENSG00000291065", fdr: 4.11e-9, difference: 0.817, regulation: "Enhanced" },
    { name: "ACSF3", fdr: 1.31e-6, difference: 0.832, regulation: "Enhanced" },
    { name: "PHACTR4", fdr: 7.49e-9, difference: -0.790, regulation: "Repressed" },
    { name: "BBS4", fdr: 9.80e-7, difference: -0.783, regulation: "Repressed" },
    { name: "SNX13", fdr: 3.22e-5, difference: -0.767, regulation: "Repressed" },
    { name: "PLAGL1", fdr: 1.42e-8, difference: 0.755, regulation: "Enhanced" },
    { name: "N4BP2L2", fdr: 1.82e-8, difference: -0.728, regulation: "Repressed" },
    { name: "LINC01876", fdr: 3.66e-5, difference: -0.724, regulation: "Repressed" },
    { name: "DDX11", fdr: 0, difference: -0.724, regulation: "Repressed" },
    { name: "SSX2IP", fdr: 8.27e-6, difference: -0.716, regulation: "Repressed" },
    { name: "NEK11", fdr: 1.21e-4, difference: -0.694, regulation: "Repressed" },
    { name: "SS18", fdr: 1.51e-4, difference: 0.696, regulation: "Enhanced" },
    { name: "OSBPL6", fdr: 0.0169, difference: 0.698, regulation: "Enhanced" },
    { name: "NIPA1", fdr: 5.84e-7, difference: 0.704, regulation: "Enhanced" },
    { name: "PLAGL1", fdr: 1.44e-6, difference: 0.704, regulation: "Enhanced" },
    { name: "PLAGL1", fdr: 2.59e-7, difference: 0.706, regulation: "Enhanced" },
    { name: "ENSG00000291065", fdr: 1.46e-4, difference: 0.667, regulation: "Enhanced" },
    { name: "ENSG00000291055", fdr: 2.74e-5, difference: 0.667, regulation: "Enhanced" },
    { name: "MALAT1", fdr: 2.29e-6, difference: -0.670, regulation: "Repressed" },
    // Add more genes here...
  ];

  const filteredGenes = genes.filter(gene => 
    gene.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Card className="w-full max-w-4xl">
      <CardHeader>
        <CardTitle>Gene List (Sorted by Inclusion Level Difference)</CardTitle>
        <Input 
          placeholder="Search genes..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left p-2">Gene Name</th>
                <th className="text-left p-2">FDR</th>
                <th className="text-left p-2">IncLevelDifference</th>
                <th className="text-left p-2">Regulation</th>
              </tr>
            </thead>
            <tbody>
              {filteredGenes.map((gene, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  <td className="p-2 font-medium">{gene.name}</td>
                  <td className="p-2">{gene.fdr === 0 ? "0" : gene.fdr.toExponential(2)}</td>
                  <td className="p-2">{gene.difference.toFixed(3)}</td>
                  <td className="p-2">
                    <span className={`px-2 py-1 rounded-full text-sm ${
                      gene.regulation === "Enhanced" 
                        ? "bg-green-100 text-green-800" 
                        : "bg-red-100 text-red-800"
                    }`}>
                      {gene.regulation}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeneList;