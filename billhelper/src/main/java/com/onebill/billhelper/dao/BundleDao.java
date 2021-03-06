package com.onebill.billhelper.dao;

import java.util.List;

import com.onebill.billhelper.dto.AdditionalChargesDto;
import com.onebill.billhelper.dto.BundleDetailsDto;
import com.onebill.billhelper.dto.BundleDto;
import com.onebill.billhelper.dto.OverDueDto;

public interface BundleDao {

	public BundleDto createBundle(BundleDto bundle);

	public BundleDto updateBundle(BundleDto bundle);

	public BundleDto removeBundle(BundleDto bundle);

	public List<BundleDto> getAllBundle();

	public BundleDto getBundleById(int BundleId);

	public BundleDetailsDto addBundleDetails(BundleDetailsDto bundleDetail);

	public BundleDetailsDto updateBundleDetails(BundleDetailsDto bundleDetail);

	public BundleDetailsDto removeDetails(BundleDetailsDto bundleDetail);

	public List<BundleDetailsDto> getAllBundleDetails();

	public BundleDetailsDto getBundleDetailById(int bundleDetailId);

	public OverDueDto addOverDue(OverDueDto overDue);

	public OverDueDto updateOverDue(OverDueDto overDue);

	public OverDueDto deleteOverDue(OverDueDto overDue);

	public OverDueDto getOverDueById(int overDueId);

	public AdditionalChargesDto addAdditionalCharges(AdditionalChargesDto additional);

	public AdditionalChargesDto updateAdditionalCharges(AdditionalChargesDto additional);

	public AdditionalChargesDto deleteAdditionalCharges(AdditionalChargesDto additional);

	public AdditionalChargesDto getAdditionalChargesById(int additionalId);

}
